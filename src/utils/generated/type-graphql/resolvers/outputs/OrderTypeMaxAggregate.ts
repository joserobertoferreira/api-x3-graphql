import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OrderTypeMaxAggregate", {})
export class OrderTypeMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legislation!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descriptions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sequenceNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderTypeDescription!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderTypeOrder!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderCategory!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualSequence!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryType!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate!: Date | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  finalSequenceNumber!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recordType!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
