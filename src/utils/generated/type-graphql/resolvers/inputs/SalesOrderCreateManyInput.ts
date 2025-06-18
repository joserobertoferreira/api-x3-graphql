import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SalesOrderCreateManyInput", {})
export class SalesOrderCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesOrderType?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesSite?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByBusinessPartner?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByBusinessPartnerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  groupCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerOrderReference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additionnalReference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  orderDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  VLYDATCON_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shipmentDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  requestedDeliveryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  loanReturnDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerName1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerName2?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryLeadTime?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldAddressLine3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerPostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerState?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCountry?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerCountryName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerContact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerName1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerName2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billAddressLine3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerPostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerState?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCountry?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerCountryName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerEuropeanUnionVatNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerName1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerName2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerContact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipAddressLine3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerPostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerState?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCountry?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerCountryName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerContact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currencyRateType?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  currencyRate?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomerLanguage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxRule?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entityUseCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentTerm?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerStatisticalGroup5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  earlyDiscountOrLateCharge?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  carrier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryMode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingSite?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  routeNumber?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryPriority?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isOrderClosingAllowed?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustContainOneOrderPerDelivery?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  partialDelivery?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingMode?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustPrintAcknowledgment?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isAcknowledgmentPrinted?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfAcknowledgmentCopies?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderHeaderTexKey1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderHeaderTexKey2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesQuote?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntersite?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntercompany?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sourceCity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesProforma?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastSalesDelivery?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastSalesDeliveryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastSalesInvoice?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastSalesInvoiceDate?: Date | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount3?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount4?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount5?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount6?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount7?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount8?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount9?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount10?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount11?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount12?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount13?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount14?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount15?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount16?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount17?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount18?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount19?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount20?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount21?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount22?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount23?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount24?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount25?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount26?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount27?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount28?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount29?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount30?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType10?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType11?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType12?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType13?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType14?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType15?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType16?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType17?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType18?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType19?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType20?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType21?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType22?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType23?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType24?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType25?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType26?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType27?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType28?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType29?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType30?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey21?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey22?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey23?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey24?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey25?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey26?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey27?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey28?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey29?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distributionKey30?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement10?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement11?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement12?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement13?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement14?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement15?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement16?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement17?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement18?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement19?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement20?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement21?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement22?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement23?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement24?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement25?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement26?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement27?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement28?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement29?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement30?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax21?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax22?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax23?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax24?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax25?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax26?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax27?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax28?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax29?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sageSalesTax30?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceIncludingOrExcludingTax?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTaxInCompanyCurrency?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTaxInCompanyCurrency?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTaxInCompanyCurrency?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTaxInCompanyCurrency?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverExcludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverIncludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalMargin?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationType?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isUnlocked?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLines?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfClosedLines?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLinesToAllocate?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfDeliveredLines?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfInvoicedLines?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicedStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creditLevelStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  signatureStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  revisionNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipperOrReceiverCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incoterm?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  intrastatTransportLocation?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incotermTown?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  forwardingAgent?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  forwardingAgentAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  geographicCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insideCityLimits?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vertexTransactionType?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxAmount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxableAmount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingReason?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  closingDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SRENUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CMGNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  OPGNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  marketingOperationType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceStructure?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SINUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalQuantityDistributedOnLines?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalWeightDistributedOnLines?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalVolumeDistributedOnLines?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weightUnitForDistributionOnLines?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeUnitForDistributionOnLines?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryType?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualHoldStatus?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldReason?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldOrReleaseUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  manualHoldOrReleaseDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manualHoldOrReleaseTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldReason?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldOrReleaseUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  previousManualHoldOrReleaseDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previousManualHoldOrReleaseTime?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  previousCreditLevelStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isValidatedAddress?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requestedDeliveryTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoicingTerm?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  scheduledInvoiceStartDueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CREUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UPDUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  AUUID_0?: Buffer | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  XDADVGRO_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRNOT_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRATI_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHNOT_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHATI_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTSTATUS_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTREJ_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DRAFTREJREN_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SOHCFMFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SOHNUMEND_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SOHVALDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;
}
