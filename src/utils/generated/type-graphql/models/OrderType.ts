import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("OrderType", {})
export class OrderType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legislation!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descriptions!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sequenceNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderTypeDescription!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderTypeOrder!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  orderCategory!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  manualSequence!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  group!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  deliveryType!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

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
  finalSequenceNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  recordType!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;
}
