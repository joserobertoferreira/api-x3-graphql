import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomerMaxAggregate", {})
export class CustomerMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shortName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reminderGroup!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerType!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByCustomerAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  groupCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  riskCustomer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultShipToAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultContact!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isActive!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isProspect!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ourSupplierCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  factor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerCurrency!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rateType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commissionCategory!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxRule!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exemptionTaxNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentTerm!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  freightInvoicing!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  earlyDiscount!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount0!: Prisma.Decimal | null;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement0!: number | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup4!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceType!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creditControl!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  authorizedCredit!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  minimumOrderAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  creditInsurance!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  insuranceDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insuranceCompany!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  reminderType!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  minimumReminderAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  noteType!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentBank!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType0!: string | null;

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
  dimension0!: string | null;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  canBeMatched!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderText!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoiceText!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  loanAuthorized!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  printAcknowledgement!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicePeriod!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  dueDateOrigin!: number | null;

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
  invoiceMode!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessSector!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prospectOrigin!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tokenCredit!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualAdditionalToken!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  totalTokenCredit!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceContract!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  necessaryTokens!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  firstContactDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastContactDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  nextContactDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lastContactType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  nextContactType!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  firstOrderDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastQuoteDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  classABC!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vatCollectionAgent!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  regionalTaxesAgent!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provinceCode!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  collectionAgent!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  printTemplate!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountStructure!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  customerSince!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  exportNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  uniqueId!: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay5!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unavailablePeriod!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cashIsActive!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  vatStartDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  vatEndDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSubjectToTax!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoicingTerm!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isElectronicInvoice!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDataElectronicInvoice!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isElectronicInvoiceAllowed!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  XDTAXPOIDRV_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDFR_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  XDEINV_0!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  XDDATDEB_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  XDDATFIN_0!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014RW_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014SEND_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_14!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;
}
