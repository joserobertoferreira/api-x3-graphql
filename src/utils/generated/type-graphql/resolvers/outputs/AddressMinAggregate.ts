import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AddressMinAggregate", {})
export class AddressMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  entityType!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entityNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultBankId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isDefault!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressLine3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  countryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressPhoneNumber5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  addressEmail5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  externalIdentifier!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isValid!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CODSEE_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FAX_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MOB_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDBUILDNR_0!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;

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
  updateUser!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDHOUSENR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GLNCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDREGION_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CRN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDCOMMUNE_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDPOSTOFFICE_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDDISTRICT_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF1_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF2_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF3_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YREGREF4_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;
}
