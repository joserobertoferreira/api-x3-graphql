import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Address } from "../models/Address";
import { BusinessPartnerCount } from "../resolvers/outputs/BusinessPartnerCount";

@TypeGraphQL.ObjectType("BusinessPartner", {})
export class BusinessPartner {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isActive!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerOrSupplierOriginCategory!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  companyName1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  companyName2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shortCompanyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  europeanUnionVatNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isIntersite!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  businessPartnerSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteIdentificationNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  standardIndustrialClassificationCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  currency!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  language!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  acronym!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  italianTaxNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fiscalCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consolidationGroup!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consolidationCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isCustomer!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isSupplier!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isGrantor!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isCarrier!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isFactor!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isSalesRep!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isMiscellaneousBusinessPartner!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isProspect!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isServiceSupplier!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isServiceCaller!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accountingCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultContact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultBankId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reportAccessCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  expenseEntryType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isMailingProhibited!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cfonbPaymentMethod!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nonResidentAccount!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPhysicalPerson!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isCashExcluded!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  documentType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPublicSector!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  relatedCompany!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consolidationPartner!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  registrationNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  vatNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  economicOperatorRegistrationAndIdNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  electronicInvoiceType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mappingCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  electronicAddress!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PTHFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BPRFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BPRFLG_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BPRFLG_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  BPRFLG_3!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BIDCRY_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CREUSR_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CREDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UPDUSR_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDAT_0!: Date;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ZCRMREF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ZTAXREF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RTGCOD_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  VALIDATE_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  USR_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DESTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  addresses?: Address[];

  @TypeGraphQL.Field(_type => BusinessPartnerCount, {
    nullable: true
  })
  _count?: BusinessPartnerCount | null;
}
