import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import {
  calculateSalesOrderTotals,
  mountPayloadAnalyticalAccountingLines,
  mountPayloadCreateSalesOrder,
  mountPayloadCreateSalesOrderLine,
  mountPayloadCreateSalesOrderPrice,
} from '../../../../helpers/sales-order-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { getAuditTimestamps } from '../../../../utils/audit-dates';
import { totalValuesByKey } from '../../../../utils/general-utils';
import { CreateSalesOrderInput } from '../../../inputs/sales-order-input';
import { SalesOrder } from '../../../types/sales-order-types';

enum CustomErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

@Resolver()
export class SalesOrderMutations {
  @Mutation(() => SalesOrder, { description: 'Create a new sales order' })
  async createSalesOrder(
    @Arg('data') input: CreateSalesOrderInput,
    @Ctx() { services, prisma }: ApolloContext,
  ): Promise<SalesOrder> {
    // Validações e Busca de Dados Preliminares ---
    const customer = await services.customerService.findCustomerByCode(input.soldToCustomer, {
      addresses: true,
      businessPartner: true,
    });

    if (!customer) {
      throw new Error(`Customer ${input.soldToCustomer} not found.`);
    }

    const siteInformation = await services.companyService.getSiteByCode(input.salesSite, {
      company: true,
    });
    if (!siteInformation) {
      throw new Error(`Sales site ${input.salesSite} not found.`);
    }

    const ledgers = await services.commonService.getLedgers(siteInformation.company.ACM_0);
    if (!ledgers || ledgers.length === 0) {
      throw new Error(`No ledgers found for company ${siteInformation.legalCompany}.`);
    }

    // adicionar mais validações aqui (ex: verificar se o endereço de entrega pertence ao cliente)

    const timestamps = getAuditTimestamps();

    const createPayload = await mountPayloadCreateSalesOrder(
      input,
      customer,
      siteInformation,
      services.businessPartnerService,
      services.commonService,
      services.parametersService,
    );

    const debug_enabled = false;

    // 2. Executar a criação dentro de uma transação ---
    const createdOrder = await services.salesOrderService.executeInTransaction(async (tx) => {
      // 'tx' é a nossa instância transacional do Prisma,

      // A. Preparar dados para as linhas (SORDERQ) e preços (SORDERP) ---
      let currentLineNumber = 1000;

      const linesToCreate: Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput[] = [];
      const pricesToCreate: Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput[] = [];
      const analyticalToCreate: Prisma.AnalyticalAccountingLinesUncheckedUpdateWithoutSalesOrderPriceInput[] = [];

      for (const lineInput of input.lines) {
        const product = await tx.products.findUnique({ where: { code: lineInput.product } });
        if (!product) {
          throw new Error(`Product ${lineInput.product} not found.`);
        }

        // const linePrice = lineInput.grossPrice ?? (product.PURBASPRI_0 as unknown as number);
        const lineNumber = currentLineNumber;

        currentLineNumber += 1000;

        // 1. Prepara os dados da LINHA (SORDERQ)
        const linePayload = await mountPayloadCreateSalesOrderLine(createPayload, lineInput, lineNumber);

        linesToCreate.push(...linePayload);

        // 2. Preparar dados de contabilidade analítica (se necessário)
        const analyticalData = await mountPayloadAnalyticalAccountingLines(
          createPayload,
          ledgers,
          services.commonService,
        );

        analyticalToCreate.push(...analyticalData);

        // 3. Prepara os dados do PREÇO (SORDERP) correspondente
        const linePrice = new Decimal(lineInput.grossPrice ?? 0);

        const pricePayload = await mountPayloadCreateSalesOrderPrice(
          createPayload,
          lineInput,
          lineNumber,
          linePrice,
          product,
          services.commonService,
        );

        for (const price of pricePayload) {
          price.analyticalAccountingLines = {
            create: analyticalData,
          };
        }

        pricesToCreate.push(...pricePayload);
      }

      if (debug_enabled) {
        throw new Error('Debug...');
      }

      // Obter o próximo número da encomenda
      const newOrderNumber = await services.salesOrderService.getNextOrderNumber({
        orderType: input.salesOrderType ?? 'SON',
        legislation: '',
        salesSite: input.salesSite,
        orderDate: input.orderDate ?? timestamps.date,
        complement: '',
      });

      // B. Criar o Cabeçalho da Encomenda com LINHAS e PREÇOS aninhados
      const totals = calculateSalesOrderTotals(pricesToCreate, linesToCreate, [
        'netPriceExcludingTax',
        'netPriceIncludingTax',
      ]);

      const amountExcludingTax = totals.netPriceExcludingTax.toDecimalPlaces(2, Decimal.ROUND_HALF_EVEN);
      const amountIncludingTax = totals.netPriceIncludingTax.toDecimalPlaces(2, Decimal.ROUND_HALF_EVEN);
      const rate = createPayload.currencyRate as Decimal.Value;
      const amountExcludingTaxInCompanyCurrency = amountExcludingTax
        .mul(rate)
        .toDecimalPlaces(2, Decimal.ROUND_HALF_EVEN);
      const amountIncludingTaxInCompanyCurrency = amountIncludingTax
        .mul(rate)
        .toDecimalPlaces(2, Decimal.ROUND_HALF_EVEN);

      const orderHeader = await tx.salesOrder.create({
        data: {
          id: newOrderNumber,
          ...createPayload,
          numberOfLines: linesToCreate.length,
          linesAmountExcludingTax: amountExcludingTax,
          totalAmountExcludingTax: amountExcludingTax,
          linesAmountRemainingToDeliverExcludingTax: amountExcludingTax,
          linesAmountExcludingTaxInCompanyCurrency: amountExcludingTaxInCompanyCurrency,
          totalAmountExcludingTaxInCompanyCurrency: amountExcludingTaxInCompanyCurrency,
          totalMargin: amountExcludingTax,
          INRNOT_0: amountExcludingTax,
          linesAmountIncludingTax: amountIncludingTax,
          totalAmountIncludingTax: amountIncludingTax,
          linesAmountRemainingToDeliverIncludingTax: amountIncludingTax,
          linesAmountIncludingTaxInCompanyCurrency: amountIncludingTaxInCompanyCurrency,
          totalAmountIncludingTaxInCompanyCurrency: amountIncludingTaxInCompanyCurrency,
          totalQuantityDistributedOnLines: totalValuesByKey(linesToCreate, 'quantityInSalesUnitOrdered'),
          INRATI_0: amountIncludingTax,
          orderLines: {
            create: linesToCreate,
          },
          orderPrices: {
            create: pricesToCreate,
          },
        },
      });

      if (!orderHeader) {
        throw new Error('Erro fatal: A encomenda não pôde ser criada.');
      }

      return orderHeader;
    });

    // Retornar a encomenda criada
    return this.getOrderById(createdOrder.id, services);
  }

  // Função helper para buscar a encomenda completa após a criação
  private async getOrderById(orderId: string, service: ApolloContext['services']) {
    const order = await service.salesOrderService.findUnique({
      where: { id: orderId },
      include: {
        orderLines: {
          include: {
            price: true,
            productDetails: true,
          },
        },
        orderPrices: {
          include: { productDetails: true },
        },
      },
    });
    if (!order) throw new Error('Erro fatal: A encomenda foi criada mas não pôde ser encontrada.');
    return order;
  }
}
