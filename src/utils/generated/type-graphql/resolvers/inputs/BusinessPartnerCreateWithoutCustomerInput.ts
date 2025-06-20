import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateNestedManyWithoutBusinessPartnerInput } from "../inputs/AddressCreateNestedManyWithoutBusinessPartnerInput";

@TypeGraphQL.InputType("BusinessPartnerCreateWithoutCustomerInput", {})
export class BusinessPartnerCreateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isActive?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerOrSupplierOriginCategory?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyName1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyName2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shortCompanyName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  europeanUnionVatNumber?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntersite?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  businessPartnerSite?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteIdentificationNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  standardIndustrialClassificationCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  acronym?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  italianTaxNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fiscalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationGroup?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationCode?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCustomer?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSupplier?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isGrantor?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCarrier?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isFactor?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSalesRep?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isMiscellaneousBusinessPartner?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isProspect?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isServiceSupplier?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isServiceCaller?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultContact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultBankId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reportAccessCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expenseEntryType?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isMailingProhibited?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cfonbPaymentMethod?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nonResidentAccount?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPhysicalPerson?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isCashExcluded?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  documentType?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPublicSector?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relatedCompany?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consolidationPartner?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vatNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  economicOperatorRegistrationAndIdNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceCode?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  electronicInvoiceType?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mappingCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  electronicAddress?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser?: string | undefined;

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
  PTHFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  BPRFLG_3?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BIDCRY_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZCRMREF_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZTAXREF_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RTGCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  VALIDATE_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  USR_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DESTYP_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutBusinessPartnerInput, {
    nullable: true
  })
  addresses?: AddressCreateNestedManyWithoutBusinessPartnerInput | undefined;
}
