import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateNestedOneWithoutAddressesInput } from "../inputs/BusinessPartnerCreateNestedOneWithoutAddressesInput";
import { CompanyCreateNestedOneWithoutAddressesInput } from "../inputs/CompanyCreateNestedOneWithoutAddressesInput";
import { CustomerCreateNestedOneWithoutAddressesInput } from "../inputs/CustomerCreateNestedOneWithoutAddressesInput";

@TypeGraphQL.InputType("AddressCreateInput", {})
export class AddressCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  entityType?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultBankId?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isDefault?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  countryName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  externalIdentifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isValid?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CODSEE_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FAX_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MOB_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDBUILDNR_0?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

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
  updateUser?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDHOUSENR_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GLNCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDREGION_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CRN_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDCOMMUNE_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDPOSTOFFICE_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDDISTRICT_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF1_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF2_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF3_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF4_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateNestedOneWithoutAddressesInput, {
    nullable: true
  })
  businessPartner?: BusinessPartnerCreateNestedOneWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutAddressesInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedOneWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutAddressesInput, {
    nullable: true
  })
  company?: CompanyCreateNestedOneWithoutAddressesInput | undefined;
}
