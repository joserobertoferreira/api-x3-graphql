import { Prisma } from '@prisma/client';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { generateUUIDBuffer, getAuditTimestamps } from '../../../../utils/audit-dates';
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
    // 1. Validações e Busca de Dados Preliminares ---
    const customer = await services.customerService.findCustomerByCode(input.soldToCustomer, {
      addresses: true,
      businessPartner: true,
    });

    if (!customer) {
      throw new Error(`Customer ${input.soldToCustomer} not found.`);
    }

    // adicionar mais validações aqui (ex: verificar se o endereço de entrega pertence ao cliente)

    const timestamps = getAuditTimestamps();
    const headerUUID = generateUUIDBuffer();

    // 2. Obter o próximo número da encomenda
    const newOrderNumber = await services.salesOrderService.getNextOrderNumber({
      orderType: input.salesOrderType ?? 'SON',
      legislation: '',
      salesSite: input.salesSite,
      orderDate: input.orderDate ?? timestamps.date,
      complement: '',
    });

    const createPayload: CreateSalesOrderInput = {
      soldToCustomer: input.soldToCustomer,
      salesSite: input.salesSite,
      orderDate: input.orderDate ?? timestamps.date,
      salesOrderType: input.salesOrderType ?? 'SON',
      customerOrderReference: input.customerOrderReference ?? '',
      shipToCustomerAddress: input.shipToCustomerAddress ?? customer.defaultShipToAddress,
      taxRule: input.taxRule ?? customer.taxRule,
      currency: input.currency ?? customer.customerCurrency,
      priceIncludingOrExcludingTax: input.priceIncludingOrExcludingTax ?? customer.priceType,
      shipmentSite: input.shipmentSite ?? input.salesSite,
      requestedDeliveryDate: input.requestedDeliveryDate ?? timestamps.date,
      shipmentDate: input.shipmentDate ?? timestamps.date,
      paymentTerm: input.paymentTerm ?? customer.paymentTerm,
      lines: input.lines,
    };

    const siteInformation = await services.companyService.getSiteByCode(input.salesSite);

    // 3. Executar a criação dentro de uma transação ---
    const createdOrder = await services.salesOrderService.executeInTransaction(async (tx) => {
      // 'tx' é a nossa instância transacional do Prisma,

      // A. Preparar dados para as linhas (SORDERQ) e preços (SORDERP) ---
      let currentLineNumber = 1000;

      const linesToCreate: Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput[] = [];
      const pricesToCreate: Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput[] = [];

      for (const lineInput of createPayload.lines) {
        const product = await tx.products.findUnique({ where: { code: lineInput.product } });
        if (!product) {
          throw new Error(`Product ${lineInput.product} not found.`);
        }

        const linePrice = lineInput.grossPrice ?? (product.PURBASPRI_0 as unknown as number);
        const lineNumber = currentLineNumber;
        const lineUUID = generateUUIDBuffer();
        const priceUUID = generateUUIDBuffer();

        currentLineNumber += 1000;

        // 1. Prepara os dados da LINHA (SORDERQ)
        linesToCreate.push({
          lineNumber: lineNumber,
          sequenceNumber: lineNumber,
          product: lineInput.product,
          quantityInSalesUnitOrdered: lineInput.quantity,
          salesSite: createPayload.salesSite,
          orderDate: createPayload.orderDate,
          requestedDeliveryDate: lineInput.expectedDeliveryDate ?? createPayload.requestedDeliveryDate,
          createDate: timestamps.date,
          updateDate: timestamps.date,
          createDatetime: timestamps.dateTime,
          updateDatetime: timestamps.dateTime,
          singleID: lineUUID,
        });

        // 2. Prepara os dados do PREÇO (SORDERP) correspondente
        pricesToCreate.push({
          lineNumber: lineNumber,
          sequenceNumber: lineNumber,
          product: lineInput.product,
          netPrice: linePrice,
          grossPrice: linePrice,
          salesUnit: product.salesUnit,
          createDate: timestamps.date,
          updateDate: timestamps.date,
          createDatetime: timestamps.dateTime,
          updateDatetime: timestamps.dateTime,
          singleID: priceUUID,
          // ... outros campos do preço ...
        });
      }

      // B. Criar o Cabeçalho da Encomenda com LINHAS e PREÇOS aninhados
      const orderHeader = await tx.salesOrder.create({
        data: {
          id: newOrderNumber,
          company: siteInformation?.legalCompany ?? '',
          salesSite: createPayload.salesSite,
          salesOrderType: createPayload.salesOrderType,
          orderDate: createPayload.orderDate,
          customerOrderReference: createPayload.customerOrderReference,
          soldToCustomer: createPayload.soldToCustomer,
          shipToCustomerAddress: createPayload.shipToCustomerAddress,
          taxRule: createPayload.taxRule,
          currency: createPayload.currency,
          priceIncludingOrExcludingTax: createPayload.priceIncludingOrExcludingTax,
          shippingSite: createPayload.shipmentSite,
          dimension1: siteInformation?.dimension1 ?? '',
          dimension2: siteInformation?.dimension2 ?? '',
          dimension3: siteInformation?.dimension3 ?? '',
          dimension4: siteInformation?.dimension4 ?? '',
          dimension5: siteInformation?.dimension5 ?? '',
          dimension6: siteInformation?.dimension6 ?? '',
          createDate: timestamps.date,
          updateDate: timestamps.date,
          createDatetime: timestamps.dateTime,
          updateDatetime: timestamps.dateTime,
          singleID: headerUUID,

          // Agora criamos ambas as relações a partir do cabeçalho
          orderLines: {
            create: linesToCreate,
          },
          orderPrices: {
            create: pricesToCreate,
          },
        },
      });

      return orderHeader;
    });

    // Retornar a encomenda criada
    // Idealmente, faríamos uma nova busca para retornar o objeto completo com todas as relações
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
          },
        },
      },
    });
    if (!order) throw new Error('Erro fatal: A encomenda foi criada mas não pôde ser encontrada.');
    return order;
  }
}
