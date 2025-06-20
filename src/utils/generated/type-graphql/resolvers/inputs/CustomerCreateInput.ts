import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedManyWithoutCustomerInput } from "../inputs/AddressCreateNestedManyWithoutCustomerInput";
import { BusinessPartnerCreateNestedOneWithoutCustomerInput } from "../inputs/BusinessPartnerCreateNestedOneWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerCreateInput", {})
export class CustomerCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shortName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reminderGroup?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerType?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payByCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  groupCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  riskCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultShipToAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultContact?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isActive?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isProspect?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ourSupplierCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  factor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerCurrency?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rateType?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commissionCategory?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxRule?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exemptionTaxNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentTerm?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  freightInvoicing?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  earlyDiscount?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount0?: Prisma.Decimal | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement0?: number | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalGroup4?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceType?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creditControl?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  authorizedCredit?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  minimumOrderAmount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  creditInsurance?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  insuranceDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insuranceCompany?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  reminderType?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  minimumReminderAmount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  noteType?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentBank?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType0?: string | undefined;

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
  dimension0?: string | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  canBeMatched?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderText?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoiceText?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  loanAuthorized?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  printAcknowledgement?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicePeriod?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  dueDateOrigin?: number | undefined;

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
  invoiceMode?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessSector?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prospectOrigin?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tokenCredit?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualAdditionalToken?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  totalTokenCredit?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceContract?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  necessaryTokens?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  firstContactDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastContactDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  nextContactDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lastContactType?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  nextContactType?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  firstOrderDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastQuoteDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  classABC?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vatCollectionAgent?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  regionalTaxesAgent?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provinceCode?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  collectionAgent?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  printTemplate?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountStructure?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  customerSince?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  exportNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  singleID?: Buffer | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  paymentDay5?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unavailablePeriod?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cashIsActive?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  vatStartDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  vatEndDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSubjectToTax?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoicingTerm?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isElectronicInvoice?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDataElectronicInvoice?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isElectronicInvoiceAllowed?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  XDTAXPOIDRV_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDFR_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  XDEINV_0?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  XDDATDEB_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  XDDATFIN_0?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014RW_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014SEND_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_10?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_11?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_12?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_13?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ZD014WFSTA_14?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  addresses?: AddressCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateNestedOneWithoutCustomerInput, {
    nullable: true
  })
  businessPartner?: BusinessPartnerCreateNestedOneWithoutCustomerInput | undefined;
}
