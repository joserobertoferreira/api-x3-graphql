import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { BusinessPartner } from "../models/BusinessPartner";
import { CustomerCount } from "../resolvers/outputs/CustomerCount";

@TypeGraphQL.ObjectType("Customer", {})
export class Customer {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shortName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reminderGroup!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customerType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payByCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payByCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  groupCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  riskCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultShipToAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultContact!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isActive!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isProspect!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ourSupplierCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  factor!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerCurrency!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rateType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commissionCategory!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxRule!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exemptionTaxNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paymentTerm!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  freightInvoicing!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  earlyDiscount!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  percentageOrAmount0!: Prisma.Decimal;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicingElement0!: number;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalGroup0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalGroup1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalGroup2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalGroup3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalGroup4!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priceType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  notes!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creditControl!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  authorizedCredit!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  minimumOrderAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  creditInsurance!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  insuranceDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  insuranceCompany!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reminderType!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  minimumReminderAmount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  noteType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paymentBank!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accountingCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType0!: string;

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
  dimension0!: string;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  canBeMatched!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderText!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  invoiceText!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  loanAuthorized!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  printAcknowledgement!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoicePeriod!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dueDateOrigin!: number;

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
  invoiceMode!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  businessSector!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  prospectOrigin!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tokenCredit!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  manualAdditionalToken!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalTokenCredit!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceContract!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  necessaryTokens!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  firstContactDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastContactDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  nextContactDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lastContactType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  nextContactType!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  firstOrderDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastQuoteDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  classABC!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  vatCollectionAgent!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  regionalTaxesAgent!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provinceCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  collectionAgent!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  printTemplate!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accountStructure!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  customerSince!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exportNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDatetime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDatetime!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  singleID!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  paymentDay5!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  unavailablePeriod!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cashIsActive!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  vatStartDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  vatEndDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isSubjectToTax!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  invoicingTerm!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isElectronicInvoice!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contact!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDataElectronicInvoice!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isElectronicInvoiceAllowed!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  XDTAXPOIDRV_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDFR_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  XDEINV_0!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  XDDATDEB_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  XDDATFIN_0!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014RW_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014SEND_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_11!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_12!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_13!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ZD014WFSTA_14!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  addresses?: Address[];

  businessPartner?: BusinessPartner | null;

  @TypeGraphQL.Field(_type => CustomerCount, {
    nullable: true
  })
  _count?: CustomerCount | null;
}
