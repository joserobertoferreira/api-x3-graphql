import { Prisma } from '@prisma/client';

import { Decimal } from '@prisma/client/runtime/library';
import { CreateSalesOrderInput, CreateSalesOrderLineInput } from '../graphql/inputs/sales-order-input';
import { BusinessPartnerService } from '../services/business-partner/partner-service';
import { CommonService, Ledgers } from '../services/common/common-service';
import { generateUUIDBuffer, getAuditTimestamps } from '../utils/audit-dates';
import { calculatePrice } from '../utils/price-util';

export async function mountPayloadCreateSalesOrder(
  input: CreateSalesOrderInput,
  customer: Prisma.CustomerGetPayload<{ include: { addresses: true; businessPartner: true } }>,
  site: Prisma.SiteGetPayload<{ include: { company: true } }>,
  partnerService: BusinessPartnerService,
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

  const payload: Prisma.SalesOrderCreateInput = {
    company: site?.legalCompany ?? '',
    salesSite: input.salesSite,
    salesOrderType: input.salesOrderType ?? 'SON',
    category: 1,
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
    dimensionType8: site.company?.dimensionType8 ?? '',
    dimensionType9: site.company?.dimensionType9 ?? '',
    dimensionType10: site.company?.dimensionType10 ?? '',
    dimensionType11: site.company?.dimensionType11 ?? '',
    dimensionType12: site.company?.dimensionType12 ?? '',
    dimensionType13: site.company?.dimensionType13 ?? '',
    dimensionType14: site.company?.dimensionType14 ?? '',
    dimensionType15: site.company?.dimensionType15 ?? '',
    dimensionType16: site.company?.dimensionType16 ?? '',
    dimensionType17: site.company?.dimensionType17 ?? '',
    dimensionType18: site.company?.dimensionType18 ?? '',
    dimensionType19: site.company?.dimensionType19 ?? '',
    dimensionType20: site.company?.dimensionType20 ?? '',
    customerStatisticalGroup1: customer.statisticalGroup0 ?? '',
    customerStatisticalGroup2: customer.statisticalGroup1 ?? '',
    customerStatisticalGroup3: customer.statisticalGroup2 ?? '',
    customerStatisticalGroup4: customer.statisticalGroup3 ?? '',
    customerStatisticalGroup5: customer.statisticalGroup4 ?? '',
    orderStatus: 1,
    totalQuantityDistributedOnLines: 1,
    weightUnitForDistributionOnLines: 'KG',
    volumeUnitForDistributionOnLines: 'L',
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
  const taxRate = taxRateResult ? taxRateResult.toNumber() : 0;

  // Calculate the price with tax and without tax
  const calculatedPrice = calculatePrice(linePrice.toNumber(), header.priceIncludingOrExcludingTax ?? 1, taxRate);

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
    netPrice: calculatedPrice.priceWithoutTax,
    netPriceExcludingTax: calculatedPrice.priceWithoutTax,
    netPriceIncludingTax: calculatedPrice.priceWithTax,
    salesUnit: product.salesUnit ?? '',
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
    createDatetime: timestamps.dateTime,
    updateDatetime: timestamps.dateTime,
    singleID: analyticalUUID,
  };

  const ledgerFields: { [key: string]: string } = {};
  const chartFields: { [key: string]: string } = {};

  await Promise.all(
    ledgers.map(async (ledger, index) => {
      switch (index) {
        case 0:
          ledgerFields.ledger1 = ledger.LED_0;
          chartFields.chartCode1 = (await commonService.getChartCode(ledgerFields.ledger1)) ?? '';
          break;
        case 1:
          ledgerFields.ledger2 = ledger.LED_1;
          chartFields.chartCode2 = (await commonService.getChartCode(ledgerFields.ledger2)) ?? '';
          break;
        case 2:
          ledgerFields.ledger3 = ledger.LED_2;
          chartFields.chartCode3 = (await commonService.getChartCode(ledgerFields.ledger3)) ?? '';
          break;
        case 3:
          ledgerFields.ledger4 = ledger.LED_3;
          chartFields.chartCode4 = (await commonService.getChartCode(ledgerFields.ledger4)) ?? '';
          break;
        case 4:
          ledgerFields.ledger5 = ledger.LED_4;
          chartFields.chartCode5 = (await commonService.getChartCode(ledgerFields.ledger5)) ?? '';
          break;
        case 5:
          ledgerFields.ledger6 = ledger.LED_6;
          chartFields.chartCode6 = (await commonService.getChartCode(ledgerFields.ledger6)) ?? '';
          break;
        default:
          break;
      }
    }),
  );

  const payload: Prisma.AnalyticalAccountingLinesUncheckedUpdateWithoutSalesOrderPriceInput = {
    ...fixedAnalyticalData,
    ...ledgerFields,
    ...chartFields,
  };

  return [payload];
}
