import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderAvgAggregate } from "../outputs/SalesOrderAvgAggregate";
import { SalesOrderCountAggregate } from "../outputs/SalesOrderCountAggregate";
import { SalesOrderMaxAggregate } from "../outputs/SalesOrderMaxAggregate";
import { SalesOrderMinAggregate } from "../outputs/SalesOrderMinAggregate";
import { SalesOrderSumAggregate } from "../outputs/SalesOrderSumAggregate";

@TypeGraphQL.ObjectType("SalesOrderGroupBy", {})
export class SalesOrderGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  company!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesOrderType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payByBusinessPartner!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payByBusinessPartnerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  groupCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerOrderReference!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  additionnalReference!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  orderDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  VLYDATCON_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shipmentDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  requestedDeliveryDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  loanReturnDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerName1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerName2!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deliveryLeadTime!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldAddressLine1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldAddressLine2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldAddressLine3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerPostalCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerCity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerState!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerCountry!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerCountryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerContact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerName1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerName2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billAddressLine1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billAddressLine2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billAddressLine3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerPostalCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerCity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerState!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerCountry!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerCountryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerEuropeanUnionVatNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerName1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerName2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerContact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipAddressLine1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipAddressLine2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipAddressLine3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerPostalCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerCity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerState!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerCountry!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerCountryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerContact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  currency!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  currencyRateType!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  currencyRate!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomerLanguage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxRule!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entityUseCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paymentTerm!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerStatisticalGroup1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerStatisticalGroup2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerStatisticalGroup3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerStatisticalGroup4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerStatisticalGroup5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  earlyDiscountOrLateCharge!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  carrier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  deliveryMode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shippingSite!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  routeNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deliveryPriority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isOrderClosingAllowed!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mustContainOneOrderPerDelivery!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  partialDelivery!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingMode!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  mustPrintAcknowledgment!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isAcknowledgmentPrinted!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfAcknowledgmentCopies!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderHeaderTexKey1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderHeaderTexKey2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesQuote!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isIntersite!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isIntercompany!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sourceCity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesProforma!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastSalesDelivery!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastSalesDeliveryDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastSalesInvoice!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastSalesInvoiceDate!: Date;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount3!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount4!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount5!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount6!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount7!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount8!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount9!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount10!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount11!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount12!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount13!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount14!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount15!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount16!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount17!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount18!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount19!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount20!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount21!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount22!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount23!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount24!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount25!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount26!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount27!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount28!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount29!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount30!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType11!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType12!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType13!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType14!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType15!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType16!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType17!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType18!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType19!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType20!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType21!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType22!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType23!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType24!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType25!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType26!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType27!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType28!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType29!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  valueType30!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey21!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey22!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey23!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey24!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey25!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey26!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey27!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey28!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey29!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distributionKey30!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement11!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement12!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement13!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement14!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement15!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement16!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement17!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement18!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement19!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement20!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement21!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement22!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement23!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement24!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement25!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement26!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement27!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement28!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement29!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement30!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax21!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax22!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax23!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax24!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax25!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax26!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax27!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax28!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax29!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sageSalesTax30!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priceIncludingOrExcludingTax!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountExcludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountIncludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmountExcludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmountIncludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountRemainingToDeliverExcludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  linesAmountRemainingToDeliverIncludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalMargin!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeCalculationRules9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElementLine9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allocationType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isUnlocked!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfLines!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfClosedLines!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfLinesToAllocate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfDeliveredLines!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfInvoicedLines!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  orderStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allocationStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deliveryStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicedStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creditLevelStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  signatureStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  revisionNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipperOrReceiverCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incoterm!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  intrastatTransportLocation!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incotermTown!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  forwardingAgent!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  forwardingAgentAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  geographicCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  insideCityLimits!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  vertexTransactionType!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  taxAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  taxableAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  closingReason!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  closingDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SRENUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CMGNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  OPGNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  marketingOperationType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  priceStructure!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SINUM_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalQuantityDistributedOnLines!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalWeightDistributedOnLines!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalVolumeDistributedOnLines!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  weightUnitForDistributionOnLines!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  volumeUnitForDistributionOnLines!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  deliveryType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  manualHoldStatus!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  manualHoldReason!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  manualHoldOrReleaseUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  manualHoldOrReleaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  manualHoldOrReleaseTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  previousManualHoldReason!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  previousManualHoldOrReleaseUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  previousManualHoldOrReleaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  previousManualHoldOrReleaseTime!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  previousCreditLevelStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isValidatedAddress!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  requestedDeliveryTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  invoicingTerm!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledInvoiceStartDueDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CREDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CREUSR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UPDUSR_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CREDATTIM_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDATTIM_0!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  AUUID_0!: Buffer;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  XDADVGRO_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INRNOT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INRATI_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INRSCHNOT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INRSCHATI_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DRAFTSTATUS_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DRAFTREJ_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DRAFTREJREN_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SOHCFMFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SOHNUMEND_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  SOHVALDAT_0!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => SalesOrderCountAggregate, {
    nullable: true
  })
  _count!: SalesOrderCountAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderAvgAggregate, {
    nullable: true
  })
  _avg!: SalesOrderAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderSumAggregate, {
    nullable: true
  })
  _sum!: SalesOrderSumAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderMinAggregate, {
    nullable: true
  })
  _min!: SalesOrderMinAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderMaxAggregate, {
    nullable: true
  })
  _max!: SalesOrderMaxAggregate | null;
}
