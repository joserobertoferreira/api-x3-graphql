import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BusinessPartner } from "../models/BusinessPartner";
import { Company } from "../models/Company";
import { Customer } from "../models/Customer";

@TypeGraphQL.ObjectType("Address", {})
export class Address {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  entityType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entityNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultBankId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isDefault!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressLine1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressLine2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressLine3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  zipCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  countryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressPhoneNumber1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressPhoneNumber2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressPhoneNumber3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressPhoneNumber4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressPhoneNumber5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressEmail1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressEmail2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressEmail3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressEmail4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  addressEmail5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  website!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  externalIdentifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isValid!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CODSEE_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FAX_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MOB_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDBUILDNR_0!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDHOUSENR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GLNCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDREGION_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CRN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDCOMMUNE_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDPOSTOFFICE_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDDISTRICT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  YREGREF1_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  YREGREF2_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  YREGREF3_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  YREGREF4_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  businessPartner?: BusinessPartner | null;

  customer?: Customer | null;

  company?: Company | null;
}
