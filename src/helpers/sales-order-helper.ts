import { Prisma } from '@prisma/client';

import { Decimal } from '@prisma/client/runtime/library';
import { CreateSalesOrderInput, CreateSalesOrderLineInput } from '../graphql/inputs/sales-order-input';
import { BusinessPartnerService } from '../services/business-partner/partner-service';
import { CommonService, Ledgers, RateCurrency } from '../services/common/common-service';
import { ParametersService } from '../services/common/parameters-service';
import { generateUUIDBuffer, getAuditTimestamps } from '../utils/audit-dates';
import { normalizeDecimal } from '../utils/general-utils';
import { calculatePrice } from '../utils/price-util';

export async function mountPayloadCreateSalesOrder(
  input: CreateSalesOrderInput,
  customer: Prisma.CustomerGetPayload<{ include: { addresses: true; businessPartner: true } }>,
  site: Prisma.SiteGetPayload<{ include: { company: true } }>,
  partnerService: BusinessPartnerService,
  commonService: CommonService,
  parametersService: ParametersService,
): Promise<Prisma.SalesOrderCreateInput> {
  const timestamps = getAuditTimestamps();
  const headerUUID = generateUUIDBuffer();

  let soldIdx = customer.addresses?.findIndex((address) => address.code === customer.defaultShipToAddress);
  if (soldIdx === undefined || soldIdx < 0) {
    soldIdx = 0;
  }

  const billCustomer = await partnerService.findBusinessPartnerByCode(customer.billToCustomer, { addresses: true });
  if (!billCustomer) {
    throw new Error(`Billing customer with code ${customer.billToCustomer} not found.`);
  }
  let billIdx = billCustomer.addresses?.findIndex((address) => address.code === billCustomer.defaultAddress);
  if (billIdx === undefined || billIdx < 0) {
    billIdx = 0;
  }

  const orderType = await commonService.getSalesOrderType(input.salesOrderType ?? 'SON', '');
  const globalCurrency = await parametersService.getParameterValue('', '', 'EURO');

  let currencyRate: RateCurrency;
  if (site.company?.accountingCurrency !== customer.customerCurrency) {
    currencyRate = await commonService.getCurrencyRate(
      globalCurrency?.value ?? 'EUR',
      input.currency ?? customer.customerCurrency,
      site.company?.accountingCurrency ?? 'EUR',
      customer.rateType,
      input.orderDate ?? timestamps.date,
    );
  } else {
    currencyRate = {
      rate: new Decimal(1),
      status: 0,
    };
  }

  const payload: Prisma.SalesOrderCreateInput = {
    company: site?.legalCompany ?? '',
    salesSite: input.salesSite,
    salesOrderType: orderType?.orderType ?? 'SON',
    category: orderType?.orderCategory ?? 1,
    orderDate: input.orderDate ?? timestamps.date,
    customerOrderReference: input.customerOrderReference ?? '',
    soldToCustomer: input.soldToCustomer,
    soldToCustomerName1: customer.businessPartner?.partnerName1,
    soldToCustomerName2: customer.businessPartner?.partnerName2,
    soldToCustomerAddress: customer.defaultShipToAddress,
    soldAddressLine1: customer.addresses?.[soldIdx]?.addressLine1 ?? '',
    soldAddressLine2: customer.addresses?.[soldIdx]?.addressLine2 ?? '',
    soldAddressLine3: customer.addresses?.[soldIdx]?.addressLine3 ?? '',
    soldToCustomerPostalCode: customer.addresses?.[soldIdx]?.zipCode ?? '',
    soldToCustomerCity: customer.addresses?.[soldIdx]?.city ?? '',
    soldToCustomerState: customer.addresses?.[soldIdx]?.state ?? '',
    soldToCustomerCountry: customer.addresses?.[soldIdx]?.country ?? '',
    soldToCustomerCountryName: customer.addresses?.[soldIdx]?.countryName ?? '',
    soldToCustomerLanguage: customer.businessPartner?.language ?? '',
    shipToCustomerAddress: input.shipToCustomerAddress ?? customer.defaultShipToAddress,
    shipToCustomerName1: customer.businessPartner?.partnerName1,
    shipToCustomerName2: customer.businessPartner?.partnerName2,
    shipAddressLine1: customer.addresses?.[soldIdx]?.addressLine1 ?? '',
    shipAddressLine2: customer.addresses?.[soldIdx]?.addressLine2 ?? '',
    shipAddressLine3: customer.addresses?.[soldIdx]?.addressLine3 ?? '',
    shipToCustomerPostalCode: customer.addresses?.[soldIdx]?.zipCode ?? '',
    shipToCustomerCity: customer.addresses?.[soldIdx]?.city ?? '',
    shipToCustomerState: customer.addresses?.[soldIdx]?.state ?? '',
    shipToCustomerCountry: customer.addresses?.[soldIdx]?.country ?? '',
    shipToCustomerCountryName: customer.addresses?.[soldIdx]?.countryName ?? '',
    billToCustomer: customer.billToCustomer,
    billToCustomerName1: billCustomer.partnerName1,
    billToCustomerName2: billCustomer.partnerName2,
    billToCustomerAddress: billCustomer.defaultAddress,
    billAddressLine1: billCustomer.addresses?.[billIdx]?.addressLine1 ?? '',
    billAddressLine2: billCustomer.addresses?.[billIdx]?.addressLine2 ?? '',
    billAddressLine3: billCustomer.addresses?.[billIdx]?.addressLine3 ?? '',
    billToCustomerPostalCode: billCustomer.addresses?.[billIdx]?.zipCode ?? '',
    billToCustomerCity: billCustomer.addresses?.[billIdx]?.city ?? '',
    billToCustomerState: billCustomer.addresses?.[billIdx]?.state ?? '',
    billToCustomerCountry: billCustomer.addresses?.[billIdx]?.country ?? '',
    billToCustomerCountryName: billCustomer.addresses?.[billIdx]?.countryName ?? '',
    billToCustomerEuropeanUnionVatNumber: billCustomer.europeanUnionVatNumber ?? '',
    payByBusinessPartner: customer.payByCustomer,
    payByBusinessPartnerAddress: customer.payByCustomerAddress,
    groupCustomer: customer.groupCustomer,
    taxRule: input.taxRule ?? customer.taxRule,
    currency: input.currency ?? customer.customerCurrency,
    currencyRateType: customer.rateType,
    currencyRate: currencyRate.rate,
    priceIncludingOrExcludingTax: input.priceIncludingOrExcludingTax ?? customer.priceType,
    shippingSite: input.shipmentSite ?? input.salesSite,
    shipmentDate: input.shipmentDate ?? timestamps.date,
    requestedDeliveryDate: input.requestedDeliveryDate ?? timestamps.date,
    paymentTerm: input.paymentTerm ?? customer.paymentTerm,
    dimensionType1: site.company?.dimensionType1 ?? '',
    dimensionType2: site.company?.dimensionType2 ?? '',
    dimensionType3: site.company?.dimensionType3 ?? '',
    dimensionType4: site.company?.dimensionType4 ?? '',
    dimensionType5: site.company?.dimensionType5 ?? '',
    dimensionType6: site.company?.dimensionType6 ?? '',
    dimensionType7: site.company?.dimensionType7 ?? '',
    dimension1: input.dimension1 ?? '',
    dimension2: input.dimension2 ?? '',
    dimension3: input.dimension3 ?? '',
    dimension4: input.dimension4 ?? '',
    dimension5: input.dimension5 ?? '',
    dimension6: input.dimension6 ?? '',
    dimension7: input.dimension7 ?? '',
    salesRep1: customer.salesRep0 ?? '',
    salesRep2: customer.salesRep1 ?? '',
    customerStatisticalGroup1: customer.statisticalGroup0 ?? '',
    customerStatisticalGroup2: customer.statisticalGroup1 ?? '',
    customerStatisticalGroup3: customer.statisticalGroup2 ?? '',
    customerStatisticalGroup4: customer.statisticalGroup3 ?? '',
    customerStatisticalGroup5: customer.statisticalGroup4 ?? '',
    orderStatus: 1,
    deliveryType: orderType?.deliveryType ?? '',
    weightUnitForDistributionOnLines: 'KG',
    volumeUnitForDistributionOnLines: 'L',
    discountOrChargeCalculationRules1: 2,
    discountOrChargeCalculationRules2: 2,
    discountOrChargeCalculationRules3: 1,
    scheduledInvoiceStartDueDate: input.orderDate ?? timestamps.date,
    createDate: timestamps.date,
    updateDate: timestamps.date,
    createDatetime: timestamps.dateTime,
    updateDatetime: timestamps.dateTime,
    singleID: headerUUID,
  };

  return payload;
}

export async function mountPayloadCreateSalesOrderLine(
  header: Prisma.SalesOrderCreateInput,
  lineInput: CreateSalesOrderLineInput,
  lineNumber: number,
): Promise<Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput[]> {
  const timestamps = getAuditTimestamps();
  const lineUUID = generateUUIDBuffer();

  const payload: Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput = {
    lineNumber: lineNumber,
    sequenceNumber: lineNumber,
    company: header.company,
    salesSite: header.salesSite,
    category: header.category,
    soldToCustomer: header.soldToCustomer,
    shipToCustomerAddress: header.shipToCustomerAddress,
    product: lineInput.product,
    orderDate: header.orderDate,
    shippingSite: header.shippingSite,
    requestedDeliveryDate: lineInput.expectedDeliveryDate ?? header.requestedDeliveryDate,
    shipmentDate: header.shipmentDate,
    expectedDeliveryDate: lineInput.expectedDeliveryDate ?? header.requestedDeliveryDate,
    distribution: 2,
    quantityInSalesUnitInitiallyOrdered: lineInput.quantity,
    quantityInSalesUnitOrdered: lineInput.quantity,
    quantityInStockUnitOrdered: lineInput.quantity,
    quantityInSalesUnitToDeliverForProductsNotManagedInStock: lineInput.quantity,
    quantityInStockUnitToDeliverForProductsNotManagedInStock: lineInput.quantity,
    createDate: timestamps.date,
    updateDate: timestamps.date,
    createDatetime: timestamps.dateTime,
    updateDatetime: timestamps.dateTime,
    singleID: lineUUID,
  };

  return [payload];
}

export async function mountPayloadCreateSalesOrderPrice(
  header: Prisma.SalesOrderCreateInput,
  lineInput: Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput,
  lineNumber: number,
  linePrice: Decimal,
  product: Prisma.ProductsGetPayload<{}>,
  commonService: CommonService,
): Promise<Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput[]> {
  const timestamps = getAuditTimestamps();
  const priceUUID = generateUUIDBuffer();

  // Get the tax rate from the product or default to 0 if not available
  const taxRateResult = await commonService.getTaxRate(product.taxLevel1, timestamps.date);

  const taxRate = taxRateResult ? taxRateResult.VATRAT_0.toNumber() : 0;
  const vat = taxRateResult ? taxRateResult.VAT_0 : '';

  // Calculate the price with tax and without tax
  const calculatedPrice = calculatePrice(linePrice, header.priceIncludingOrExcludingTax ?? 1, taxRate);

  const payload: Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput = {
    lineNumber: lineNumber,
    sequenceNumber: lineNumber,
    company: header.company,
    category: header.category,
    soldToCustomer: header.soldToCustomer,
    shipToCustomerAddress: header.shipToCustomerAddress,
    billToCustomer: header.billToCustomer,
    shippingSite: lineInput.shippingSite ?? header.shippingSite,
    salesSite: lineInput.salesSite ?? header.salesSite,
    product: lineInput.product,
    productDescriptionInUserLanguage: product.description1 ?? '',
    productDescriptionInCustomerLanguage: product.description1 ?? '',
    taxLevel1: product.taxLevel1 ?? '',
    taxLevel2: product.taxLevel2 ?? '',
    taxLevel3: product.taxLevel3 ?? '',
    salesRepCommissionFactor: 1,
    grossPrice: linePrice,
    priceReason: 1,
    tax1: vat,
    netPrice: calculatedPrice.priceWithoutTax,
    netPriceExcludingTax: calculatedPrice.priceWithoutTax,
    netPriceIncludingTax: calculatedPrice.priceWithTax,
    margin: calculatedPrice.priceWithoutTax,
    salesUnit: product.salesUnit ?? 'EA',
    stockUnit: product.stockUnit ?? 'EA',
    salesUnitToStockUnitConversionFactor: product.salesUnitToStockUnitConversionFactor ?? 1,
    productStatisticalGroup1: product.productStatisticalGroup1 ?? '',
    productStatisticalGroup2: product.productStatisticalGroup2 ?? '',
    productStatisticalGroup3: product.productStatisticalGroup3 ?? '',
    productStatisticalGroup4: product.productStatisticalGroup4 ?? '',
    productStatisticalGroup5: product.productStatisticalGroup5 ?? '',
    createDate: timestamps.date,
    updateDate: timestamps.date,
    createDatetime: timestamps.dateTime,
    updateDatetime: timestamps.dateTime,
    singleID: priceUUID,
    ENDDAT_0: timestamps.date,
  };

  return [payload];
}

export async function mountPayloadAnalyticalAccountingLines(
  header: Prisma.SalesOrderCreateInput,
  ledgers: Ledgers[],
  commonService: CommonService,
): Promise<Prisma.AnalyticalAccountingLinesUncheckedUpdateWithoutSalesOrderPriceInput[]> {
  const timestamps = getAuditTimestamps();
  const analyticalUUID = generateUUIDBuffer();

  const fixedAnalyticalData: Partial<Prisma.AnalyticalAccountingLinesCreateInput> = {
    abbreviation: 'SOP',
    sortValue: 1,
    dimensionType1: header.dimensionType1,
    dimensionType2: header.dimensionType2,
    dimensionType3: header.dimensionType3,
    dimensionType4: header.dimensionType4,
    dimensionType5: header.dimensionType5,
    dimensionType6: header.dimensionType6,
    dimensionType7: header.dimensionType7,
    dimension1: header.dimension1,
    dimension2: header.dimension2,
    dimension3: header.dimension3,
    dimension4: header.dimension4,
    dimension5: header.dimension5,
    dimension6: header.dimension6,
    dimension7: header.dimension7,
    createDatetime: timestamps.dateTime,
    updateDatetime: timestamps.dateTime,
    singleID: analyticalUUID,
  };

  const ledgerData = ledgers[0];
  const ledgerFields: { [key: string]: string } = {};
  const chartFields: { [key: string]: string } = {};

  if (ledgerData) {
    const promises = [];

    for (let i = 0; i < 6; i++) {
      const ledgerKey = `LED_${i}`;
      const key = ledgerKey as keyof Ledgers;

      const ledgerValue = ledgerData[key] ?? '';

      ledgerFields[`ledger${i + 1}`] = ledgerValue;

      const promise = commonService.getChartCode(ledgerValue).then((code) => {
        chartFields[`chartCode${i + 1}`] = code ?? '';
      });

      promises.push(promise);
    }

    await Promise.all(promises);
  }

  const payload: Prisma.AnalyticalAccountingLinesUncheckedUpdateWithoutSalesOrderPriceInput = {
    ...fixedAnalyticalData,
    ...ledgerFields,
    ...chartFields,
  };

  return [payload];
}

/**
 * Calcula múltiplos totais agregados, juntando informações de um array de preços e um de linhas.
 * Para cada chave fornecida em `keysToCalculate`, calcula a soma de (price[key] * line[quantity]).
 *
 * @param pricesArray O array de objetos de preço (SalesOrderPrice).
 * @param linesArray O array de objetos de linha (SalesOrderLine).
 * @param keysToCalculate Um array de chaves do objeto de preço cujos valores devem ser calculados.
 * @returns Um objeto onde cada chave é uma das `keysToCalculate` e seu valor é o total acumulado como Decimal.
 */
export function calculateSalesOrderTotals<K extends keyof Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput>(
  pricesArray: Prisma.SalesOrderPriceUncheckedCreateWithoutOrderInput[],
  linesArray: Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput[],
  keysToCalculate: K[],
): Record<K, Decimal> {
  // Pré-processar o array de linhas para uma busca O(1) usando um Map.
  const linesMap = new Map<string, Prisma.SalesOrderLineUncheckedCreateWithoutOrderInput>();
  for (const line of linesArray) {
    if (line.lineNumber !== undefined && line.sequenceNumber !== undefined) {
      const compositeKey = `${line.lineNumber}-${line.sequenceNumber}`;
      linesMap.set(compositeKey, line);
    }
  }

  // Começamos com todas as chaves desejadas com um valor de Decimal(0).
  const initialTotals = Object.fromEntries(keysToCalculate.map((key) => [key, new Decimal(0)])) as Record<K, Decimal>;

  return pricesArray.reduce((currentTotals, price) => {
    // A. Encontrar a linha correspondente e a quantidade (lógica de validação)
    if (price.lineNumber === undefined || price.sequenceNumber === undefined) {
      return currentTotals; // Pula se o preço não tiver chaves de junção
    }

    const compositeKey = `${price.lineNumber}-${price.sequenceNumber}`;
    const matchingLine = linesMap.get(compositeKey);

    if (
      !matchingLine ||
      matchingLine['quantityInSalesUnitOrdered'] === undefined ||
      matchingLine['quantityInSalesUnitOrdered'] === null
    ) {
      return currentTotals; // Pula se a linha ou sua quantidade não existirem
    }

    try {
      const quantityValue = normalizeDecimal(matchingLine['quantityInSalesUnitOrdered'] as any);

      // B. Percorrer cada chave que precisamos calcular
      for (const key of keysToCalculate) {
        const valueToMultiply = price[key];

        // C. Se o valor para esta chave específica não existir no preço, pulamos apenas este cálculo
        if (valueToMultiply !== undefined && valueToMultiply !== null) {
          try {
            const priceValue = normalizeDecimal(valueToMultiply as any);
            const lineTotalForKey = priceValue.mul(quantityValue);

            // D. Adicionar o resultado ao total correspondente no nosso objeto acumulador
            currentTotals[key] = currentTotals[key].add(lineTotalForKey);
          } catch (conversionError) {
            // Ignora apenas esta chave se a conversão falhar, mas continua com as outras
            console.warn(`Valor inválido para a chave "${String(key)}" ignorado.`, { price, conversionError });
          }
        }
      }
    } catch (quantityError) {
      // Se a própria quantidade for inválida, pulamos o item inteiro
      console.warn(`Quantidade inválida ignorada.`, { matchingLine, quantityError });
    }

    // E. Retornar o objeto de totais atualizado para a próxima iteração
    return currentTotals;
  }, initialTotals);
}
