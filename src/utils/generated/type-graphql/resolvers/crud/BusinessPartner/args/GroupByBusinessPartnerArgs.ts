import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerOrderByWithAggregationInput } from "../../../inputs/BusinessPartnerOrderByWithAggregationInput";
import { BusinessPartnerScalarWhereWithAggregatesInput } from "../../../inputs/BusinessPartnerScalarWhereWithAggregatesInput";
import { BusinessPartnerWhereInput } from "../../../inputs/BusinessPartnerWhereInput";
import { BusinessPartnerScalarFieldEnum } from "../../../../enums/BusinessPartnerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BusinessPartnerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BusinessPartnerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BusinessPartnerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "isActive" | "category" | "customerOrSupplierOriginCategory" | "companyName1" | "companyName2" | "shortCompanyName" | "europeanUnionVatNumber" | "isIntersite" | "businessPartnerSite" | "country" | "siteIdentificationNumber" | "standardIndustrialClassificationCode" | "currency" | "language" | "acronym" | "italianTaxNumber" | "fiscalCode" | "consolidationGroup" | "consolidationCode" | "isCustomer" | "isSupplier" | "isGrantor" | "isCarrier" | "isFactor" | "isSalesRep" | "isMiscellaneousBusinessPartner" | "isProspect" | "isServiceSupplier" | "isServiceCaller" | "accountingCode" | "defaultAddress" | "defaultContact" | "defaultBankId" | "reportAccessCode" | "expenseEntryType" | "isMailingProhibited" | "cfonbPaymentMethod" | "nonResidentAccount" | "isPhysicalPerson" | "isCashExcluded" | "documentType" | "isPublicSector" | "relatedCompany" | "consolidationPartner" | "registrationNumber" | "vatNumber" | "economicOperatorRegistrationAndIdNumber" | "serviceCode" | "electronicInvoiceType" | "mappingCode" | "electronicAddress" | "PTHFLG_0" | "BPRFLG_0" | "BPRFLG_1" | "BPRFLG_2" | "BPRFLG_3" | "BIDCRY_0" | "EXPNUM_0" | "CREUSR_0" | "CREDAT_0" | "UPDUSR_0" | "UPDDAT_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "ZCRMREF_0" | "ZTAXREF_0" | "RTGCOD_0" | "VALIDATE_0" | "USR_0" | "DESTYP_0" | "UPDTICK_0">;

  @TypeGraphQL.Field(_type => BusinessPartnerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BusinessPartnerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
