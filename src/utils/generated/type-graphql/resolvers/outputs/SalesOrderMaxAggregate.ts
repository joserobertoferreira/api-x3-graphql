import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SalesOrderMaxAggregate", {})
export class SalesOrderMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesOrderType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesSite!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByBusinessPartner!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByBusinessPartnerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  groupCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerOrderReference!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additionnalReference!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  orderDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  VLYDATCON_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shipmentDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  requestedDeliveryDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  loanReturnDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerName1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerName2!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryLeadTime!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerPostalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerState!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCountry!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCountryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerContact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerName1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerName2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerPostalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerState!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCountry!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCountryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerEuropeanUnionVatNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerName1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerName2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerContact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerPostalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerState!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCountry!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCountryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerContact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currencyRateType!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  currencyRate!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerLanguage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxRule!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entityUseCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentTerm!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  earlyDiscountOrLateCharge!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  carrier!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryMode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingSite!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  routeNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryPriority!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isOrderClosingAllowed!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustContainOneOrderPerDelivery!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  partialDelivery!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustPrintAcknowledgment!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isAcknowledgmentPrinted!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfAcknowledgmentCopies!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderHeaderTexKey1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderHeaderTexKey2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesQuote!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntersite!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntercompany!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sourceCity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesProforma!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastSalesDelivery!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastSalesDeliveryDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastSalesInvoice!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastSalesInvoiceDate!: Date | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount3!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount4!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount5!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount6!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount7!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount8!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount9!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount10!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount11!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount12!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount13!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount14!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount15!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount16!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount17!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount18!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount19!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount20!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount21!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount22!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount23!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount24!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount25!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount26!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount27!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount28!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount29!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount30!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType19!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType20!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType21!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType22!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType23!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType24!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType25!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType26!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType27!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType28!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType29!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType30!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey21!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey22!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey23!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey24!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey25!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey26!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey27!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey28!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey29!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey30!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement19!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement20!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement21!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement22!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement23!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement24!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement25!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement26!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement27!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement28!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement29!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement30!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax21!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax22!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax23!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax24!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax25!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax26!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax27!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax28!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax29!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax30!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceIncludingOrExcludingTax!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalMargin!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isUnlocked!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfClosedLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLinesToAllocate!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfDeliveredLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfInvoicedLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicedStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creditLevelStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  signatureStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  revisionNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipperOrReceiverCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incoterm!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  intrastatTransportLocation!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incotermTown!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  forwardingAgent!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  forwardingAgentAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  geographicCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insideCityLimits!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vertexTransactionType!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxableAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingReason!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  closingDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SRENUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CMGNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  OPGNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  marketingOperationType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceStructure!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SINUM_0!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalQuantityDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalWeightDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalVolumeDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weightUnitForDistributionOnLines!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeUnitForDistributionOnLines!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualHoldStatus!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldReason!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldOrReleaseUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  manualHoldOrReleaseDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldOrReleaseTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldReason!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldOrReleaseUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  previousManualHoldOrReleaseDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldOrReleaseTime!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  previousCreditLevelStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isValidatedAddress!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requestedDeliveryTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoicingTerm!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  scheduledInvoiceStartDueDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CREUSR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UPDUSR_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDATTIM_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDATTIM_0!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  AUUID_0!: Buffer | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  XDADVGRO_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRNOT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRATI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHNOT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHATI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTSTATUS_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTREJ_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DRAFTREJREN_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SOHCFMFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SOHNUMEND_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SOHVALDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
