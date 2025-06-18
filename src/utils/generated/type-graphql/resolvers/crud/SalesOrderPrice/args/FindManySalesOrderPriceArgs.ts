import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceOrderByWithRelationInput } from "../../../inputs/SalesOrderPriceOrderByWithRelationInput";
import { SalesOrderPriceWhereInput } from "../../../inputs/SalesOrderPriceWhereInput";
import { SalesOrderPriceWhereUniqueInput } from "../../../inputs/SalesOrderPriceWhereUniqueInput";
import { SalesOrderPriceScalarFieldEnum } from "../../../../enums/SalesOrderPriceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalesOrderPriceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalesOrderPriceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "salesOrder" | "lineNumber" | "sequenceNumber" | "company" | "category" | "STRDAT_0" | "ENDDAT_0" | "soldToCustomer" | "shipToCustomerAddress" | "shipToCustomerContact" | "billToCustomer" | "shippingSite" | "salesSite" | "product" | "productDescriptionInUserLanguage" | "productDescriptionInCustomerLanguage" | "customerProduct" | "taxLevel1" | "taxLevel2" | "taxLevel3" | "salesRep1" | "salesRep2" | "salesRep1CommissionRate1" | "salesRep1CommissionRate2" | "salesRepCommissionFactor" | "grossPrice" | "priceReason" | "netPrice" | "netPriceExcludingTax" | "netPriceIncludingTax" | "margin" | "costPrice" | "discountOrCharge1" | "discountOrCharge2" | "discountOrCharge3" | "discountOrCharge4" | "discountOrCharge5" | "discountOrCharge6" | "discountOrCharge7" | "discountOrCharge8" | "discountOrCharge9" | "discountOrChargeReason1" | "discountOrChargeReason2" | "discountOrChargeReason3" | "discountOrChargeReason4" | "discountOrChargeReason5" | "discountOrChargeReason6" | "discountOrChargeReason7" | "discountOrChargeReason8" | "discountOrChargeReason9" | "tax1" | "tax2" | "tax3" | "calculatedTaxableBase1" | "calculatedTaxableBase2" | "salesUnit" | "stockUnit" | "salesUnitToStockUnitConversionFactor" | "productStatisticalGroup1" | "productStatisticalGroup2" | "productStatisticalGroup3" | "productStatisticalGroup4" | "productStatisticalGroup5" | "lineStatus" | "lineType" | "freeProduct" | "freeProductLineSource" | "salesQuote" | "salesQuoteLineNumber" | "CONNUM_0" | "LINREVNUM_0" | "EXPNUM_0" | "SSTCOD_0" | "BPCSALPRI_0" | "CREDAT_0" | "UPDDAT_0" | "CREUSR_0" | "UPDUSR_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "INVCND_0" | "PCNTNUM_0" | "ROWID"> | undefined;
}
