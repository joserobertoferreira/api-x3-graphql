import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OrderTypeCreateInput", {})
export class OrderTypeCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legislation?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descriptions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sequenceNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderTypeDescription?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderTypeOrder?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderCategory?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualSequence?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryType?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate?: Date | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  finalSequenceNumber?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recordType?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;
}
