import { Prisma } from '@prisma/client';

import { CreateSalesOrderInput } from '../graphql/inputs/sales-order-input';
import { BusinessPartnerService } from '../services/business-partner/partner-service';
import { generateUUIDBuffer, getAuditTimestamps } from '../utils/audit-dates';

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
    orderDate: input.orderDate ?? timestamps.date,
    customerOrderReference: input.customerOrderReference ?? '',
    soldToCustomer: input.soldToCustomer,
    shipToCustomerAddress: input.shipToCustomerAddress ?? customer.defaultShipToAddress,
    billToCustomer: customer.billToCustomer,
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
    shipToCustomerName1: customer.businessPartner?.companyName1,
    shipToCustomerName2: customer.businessPartner?.companyName2,
    shipAddressLine1: customer.addresses?.[soldIdx]?.addressLine1 ?? '',
    shipAddressLine2: customer.addresses?.[soldIdx]?.addressLine2 ?? '',
    shipAddressLine3: customer.addresses?.[soldIdx]?.addressLine3 ?? '',
    shipToCustomerPostalCode: customer.addresses?.[soldIdx]?.zipCode ?? '',
    shipToCustomerCity: customer.addresses?.[soldIdx]?.city ?? '',
    shipToCustomerState: customer.addresses?.[soldIdx]?.state ?? '',
    shipToCustomerCountry: customer.addresses?.[soldIdx]?.country ?? '',
    shipToCustomerCountryName: customer.addresses?.[soldIdx]?.countryName ?? '',
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
    billAddressLine1: billCustomer.addresses?.[billIdx]?.addressLine1 ?? '',
    billAddressLine2: billCustomer.addresses?.[billIdx]?.addressLine2 ?? '',
    billAddressLine3: billCustomer.addresses?.[billIdx]?.addressLine3 ?? '',
    billToCustomerPostalCode: billCustomer.addresses?.[billIdx]?.zipCode ?? '',
    billToCustomerCity: billCustomer.addresses?.[billIdx]?.city ?? '',
    billToCustomerState: billCustomer.addresses?.[billIdx]?.state ?? '',
    billToCustomerCountry: billCustomer.addresses?.[billIdx]?.country ?? '',
    billToCustomerCountryName: billCustomer.addresses?.[billIdx]?.countryName ?? '',
    billToCustomerEuropeanUnionVatNumber: billCustomer.europeanUnionVatNumber ?? '',
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
