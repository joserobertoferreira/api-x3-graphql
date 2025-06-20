import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BusinessPartnerMaxAggregate", {})
export class BusinessPartnerMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isActive!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerOrSupplierOriginCategory!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyName1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyName2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shortCompanyName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  europeanUnionVatNumber!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntersite!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessPartnerSite!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteIdentificationNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  standardIndustrialClassificationCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  acronym!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  italianTaxNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fiscalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationGroup!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationCode!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCustomer!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSupplier!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isGrantor!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCarrier!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isFactor!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSalesRep!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isMiscellaneousBusinessPartner!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isProspect!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isServiceSupplier!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isServiceCaller!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultContact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultBankId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reportAccessCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expenseEntryType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isMailingProhibited!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cfonbPaymentMethod!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nonResidentAccount!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPhysicalPerson!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCashExcluded!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  documentType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPublicSector!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relatedCompany!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationPartner!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vatNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  economicOperatorRegistrationAndIdNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceCode!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  electronicInvoiceType!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mappingCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  electronicAddress!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser!: string | null;

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
  singleID!: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PTHFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_3!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BIDCRY_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZCRMREF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZTAXREF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RTGCOD_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  VALIDATE_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  USR_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DESTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;
}
