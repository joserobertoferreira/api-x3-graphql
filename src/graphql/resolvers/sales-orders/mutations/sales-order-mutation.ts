import { Prisma } from '@prisma/client';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { mountPayloadCreateSalesOrder } from '../../../../helpers/sales-order-helper';
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

    const chartCodes = await services.commonService.getChartCodes(ledgers);

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

    const createPayload = await mountPayloadCreateSalesOrder(
      input,
      customer,
      siteInformation,
      services.businessPartnerService,
    );
    // const createPayload: CreateSalesOrderInput = {
    //   soldToCustomer: input.soldToCustomer,
    //   salesSite: input.salesSite,
    //   orderDate: input.orderDate ?? timestamps.date,
    //   salesOrderType: input.salesOrderType ?? 'SON',
    //   customerOrderReference: input.customerOrderReference ?? '',
    //   shipToCustomerAddress: input.shipToCustomerAddress ?? customer.defaultShipToAddress,
    //   taxRule: input.taxRule ?? customer.taxRule,
    //   currency: input.currency ?? customer.customerCurrency,
    //   priceIncludingOrExcludingTax: input.priceIncludingOrExcludingTax ?? customer.priceType,
    //   shipmentSite: input.shipmentSite ?? input.salesSite,
    //   requestedDeliveryDate: input.requestedDeliveryDate ?? timestamps.date,
    //   shipmentDate: input.shipmentDate ?? timestamps.date,
    //   paymentTerm: input.paymentTerm ?? customer.paymentTerm,
    //   lines: input.lines,
    // };

    // 3. Executar a criação dentro de uma transação ---
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

        const linePrice = lineInput.grossPrice ?? (product.PURBASPRI_0 as unknown as number);
        const lineNumber = currentLineNumber;
        const lineUUID = generateUUIDBuffer();
        const priceUUID = generateUUIDBuffer();
        const analyticalUUID = generateUUIDBuffer();

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

        // 2. Preparar dados de contabilidade analítica (se necessário)
        const fixedAnalyticalData: Partial<Prisma.AnalyticalAccountingLinesCreateInput> = {
          abbreviation: 'SOP',
          sortValue: 1,
          createDatetime: timestamps.dateTime,
          updateDatetime: timestamps.dateTime,
          singleID: analyticalUUID,
        };

        const ledgerFields: { [key: string]: string } = {};
        const chartFields: { [key: string]: string } = {};

        ledgers.forEach((ledger, index) => {
          switch (index) {
            case 0:
              ledgerFields.ledger1 = ledger.LED_0;
              break;
            case 1:
              ledgerFields.ledger2 = ledger.LED_1;
              break;
            case 2:
              ledgerFields.ledger3 = ledger.LED_2;
              break;
            case 3:
              ledgerFields.ledger4 = ledger.LED_3;
              break;
            case 4:
              ledgerFields.ledger5 = ledger.LED_4;
              break;
            case 5:
              ledgerFields.ledger6 = ledger.LED_6;
              break;
            default:
              break;
          }
        });

        chartCodes.forEach((chart, index) => {
          switch (index) {
            case 0:
              chartFields.chart1 = chart;
              break;
            case 1:
              chartFields.chart2 = chart;
              break;
            case 2:
              chartFields.chart3 = chart;
              break;
            case 3:
              chartFields.chart4 = chart;
              break;
            case 4:
              chartFields.chart5 = chart;
              break;
            case 5:
              chartFields.chart6 = chart;
              break;
            default:
              break;
          }
        });

        const analyticalData = {
          ...fixedAnalyticalData,
          ...ledgerFields,
          ...chartFields,
        } as Prisma.AnalyticalAccountingLinesUncheckedCreateWithoutSalesOrderPriceInput;

        analyticalToCreate.push(analyticalData);

        // 3. Prepara os dados do PREÇO (SORDERP) correspondente
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
          analyticalAccountingLines: {
            create: analyticalData,
          },
        });
      }

      // B. Criar o Cabeçalho da Encomenda com LINHAS e PREÇOS aninhados
      const orderHeader = await tx.salesOrder.create({
        data: {
          id: newOrderNumber,
          ...createPayload,
          // company: siteInformation?.legalCompany ?? '',
          // salesSite: createPayload.salesSite,
          // salesOrderType: createPayload.salesOrderType,
          // orderDate: createPayload.orderDate,
          // customerOrderReference: createPayload.customerOrderReference,
          // soldToCustomer: createPayload.soldToCustomer,
          // shipToCustomerAddress: createPayload.shipToCustomerAddress,
          // billToCustomer: customer.billToCustomer,
          // payByBusinessPartner: customer.payByCustomer,
          // payByBusinessPartnerAddress: customer.payByCustomerAddress,
          // groupCustomer: customer.groupCustomer,
          // taxRule: createPayload.taxRule,
          // currency: createPayload.currency,
          // priceIncludingOrExcludingTax: createPayload.priceIncludingOrExcludingTax,
          // shippingSite: createPayload.shipmentSite,
          // shipmentDate: createPayload.shipmentDate,
          // requestedDeliveryDate: createPayload.requestedDeliveryDate,
          // shipToCustomerName1: customer.businessPartner?.companyName1,
          // shipToCustomerName2: customer.businessPartner?.companyName2,
          // soldToCustomerAddress: customer.defaultShipToAddress,
          // dimension2: siteInformation?.dimension2 ?? '',
          // dimension3: siteInformation?.dimension3 ?? '',
          // dimension4: siteInformation?.dimension4 ?? '',
          // dimension5: siteInformation?.dimension5 ?? '',
          // dimension6: siteInformation?.dimension6 ?? '',
          // createDate: timestamps.date,
          // updateDate: timestamps.date,
          // createDatetime: timestamps.dateTime,
          // updateDatetime: timestamps.dateTime,
          // singleID: headerUUID,
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
