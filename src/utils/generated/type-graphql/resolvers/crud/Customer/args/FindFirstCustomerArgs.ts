import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByWithRelationInput } from "../../../inputs/CustomerOrderByWithRelationInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "customerCode" | "customerName" | "shortName" | "category" | "reminderGroup" | "customerType" | "billToCustomer" | "billToCustomerAddress" | "payByCustomer" | "payByCustomerAddress" | "groupCustomer" | "riskCustomer" | "defaultAddress" | "defaultShipToAddress" | "defaultContact" | "isActive" | "isProspect" | "ourSupplierCode" | "factor" | "customerCurrency" | "rateType" | "commissionCategory" | "salesRep0" | "salesRep1" | "taxRule" | "exemptionTaxNumber" | "paymentTerm" | "freightInvoicing" | "earlyDiscount" | "percentageOrAmount0" | "percentageOrAmount1" | "percentageOrAmount2" | "percentageOrAmount3" | "percentageOrAmount4" | "percentageOrAmount5" | "percentageOrAmount6" | "percentageOrAmount7" | "percentageOrAmount8" | "percentageOrAmount9" | "percentageOrAmount10" | "percentageOrAmount11" | "percentageOrAmount12" | "percentageOrAmount13" | "percentageOrAmount14" | "percentageOrAmount15" | "percentageOrAmount16" | "percentageOrAmount17" | "percentageOrAmount18" | "percentageOrAmount19" | "percentageOrAmount20" | "percentageOrAmount21" | "percentageOrAmount22" | "percentageOrAmount23" | "percentageOrAmount24" | "percentageOrAmount25" | "percentageOrAmount26" | "percentageOrAmount27" | "percentageOrAmount28" | "percentageOrAmount29" | "invoicingElement0" | "invoicingElement1" | "invoicingElement2" | "invoicingElement3" | "invoicingElement4" | "invoicingElement5" | "invoicingElement6" | "invoicingElement7" | "invoicingElement8" | "invoicingElement9" | "invoicingElement10" | "invoicingElement11" | "invoicingElement12" | "invoicingElement13" | "invoicingElement14" | "invoicingElement15" | "invoicingElement16" | "invoicingElement17" | "invoicingElement18" | "invoicingElement19" | "invoicingElement20" | "invoicingElement21" | "invoicingElement22" | "invoicingElement23" | "invoicingElement24" | "invoicingElement25" | "invoicingElement26" | "invoicingElement27" | "invoicingElement28" | "invoicingElement29" | "statisticalGroup0" | "statisticalGroup1" | "statisticalGroup2" | "statisticalGroup3" | "statisticalGroup4" | "priceType" | "notes" | "creditControl" | "authorizedCredit" | "minimumOrderAmount" | "creditInsurance" | "insuranceDate" | "insuranceCompany" | "reminderType" | "minimumReminderAmount" | "noteType" | "paymentBank" | "accountingCode" | "dimensionType0" | "dimensionType1" | "dimensionType2" | "dimensionType3" | "dimensionType4" | "dimensionType5" | "dimensionType6" | "dimensionType7" | "dimensionType8" | "dimensionType9" | "dimensionType10" | "dimensionType11" | "dimensionType12" | "dimensionType13" | "dimensionType14" | "dimensionType15" | "dimensionType16" | "dimensionType17" | "dimensionType18" | "dimensionType19" | "dimension0" | "dimension1" | "dimension2" | "dimension3" | "dimension4" | "dimension5" | "dimension6" | "dimension7" | "dimension8" | "dimension9" | "dimension10" | "dimension11" | "dimension12" | "dimension13" | "dimension14" | "dimension15" | "dimension16" | "dimension17" | "dimension18" | "dimension19" | "canBeMatched" | "orderText" | "invoiceText" | "loanAuthorized" | "printAcknowledgement" | "invoicePeriod" | "dueDateOrigin" | "isOrderClosingAllowed" | "mustContainOneOrderPerDelivery" | "partialDelivery" | "invoiceMode" | "businessSector" | "prospectOrigin" | "tokenCredit" | "manualAdditionalToken" | "totalTokenCredit" | "serviceContract" | "necessaryTokens" | "firstContactDate" | "lastContactDate" | "nextContactDate" | "lastContactType" | "nextContactType" | "firstOrderDate" | "lastQuoteDate" | "classABC" | "vatCollectionAgent" | "regionalTaxesAgent" | "provinceCode" | "collectionAgent" | "printTemplate" | "accountStructure" | "customerSince" | "exportNumber" | "createUser" | "createDate" | "updateUser" | "updateDate" | "createDatetime" | "updateDatetime" | "singleID" | "paymentDay0" | "paymentDay1" | "paymentDay2" | "paymentDay3" | "paymentDay4" | "paymentDay5" | "unavailablePeriod" | "cashIsActive" | "vatStartDate" | "vatEndDate" | "isSubjectToTax" | "invoicingTerm" | "isElectronicInvoice" | "contact" | "startDataElectronicInvoice" | "isElectronicInvoiceAllowed" | "XDTAXPOIDRV_0" | "XDFR_0" | "XDEINV_0" | "XDDATDEB_0" | "XDDATFIN_0" | "ZD014RW_0" | "ZD014SEND_0" | "ZD014WFSTA_0" | "ZD014WFSTA_1" | "ZD014WFSTA_2" | "ZD014WFSTA_3" | "ZD014WFSTA_4" | "ZD014WFSTA_5" | "ZD014WFSTA_6" | "ZD014WFSTA_7" | "ZD014WFSTA_8" | "ZD014WFSTA_9" | "ZD014WFSTA_10" | "ZD014WFSTA_11" | "ZD014WFSTA_12" | "ZD014WFSTA_13" | "ZD014WFSTA_14" | "id"> | undefined;
}
