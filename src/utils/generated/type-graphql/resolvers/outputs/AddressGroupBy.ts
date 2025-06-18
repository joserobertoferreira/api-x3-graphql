import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressAvgAggregate } from "../outputs/AddressAvgAggregate";
import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
import { AddressSumAggregate } from "../outputs/AddressSumAggregate";

@TypeGraphQL.ObjectType("AddressGroupBy", {})
export class AddressGroupBy {
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
  CREDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CREUSR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UPDUSR_0!: string;

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

  @TypeGraphQL.Field(_type => AddressCountAggregate, {
    nullable: true
  })
  _count!: AddressCountAggregate | null;

  @TypeGraphQL.Field(_type => AddressAvgAggregate, {
    nullable: true
  })
  _avg!: AddressAvgAggregate | null;

  @TypeGraphQL.Field(_type => AddressSumAggregate, {
    nullable: true
  })
  _sum!: AddressSumAggregate | null;

  @TypeGraphQL.Field(_type => AddressMinAggregate, {
    nullable: true
  })
  _min!: AddressMinAggregate | null;

  @TypeGraphQL.Field(_type => AddressMaxAggregate, {
    nullable: true
  })
  _max!: AddressMaxAggregate | null;
}
