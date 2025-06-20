import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersAvgAggregate } from "../outputs/SequenceNumbersAvgAggregate";
import { SequenceNumbersCountAggregate } from "../outputs/SequenceNumbersCountAggregate";
import { SequenceNumbersMaxAggregate } from "../outputs/SequenceNumbersMaxAggregate";
import { SequenceNumbersMinAggregate } from "../outputs/SequenceNumbersMinAggregate";
import { SequenceNumbersSumAggregate } from "../outputs/SequenceNumbersSumAggregate";

@TypeGraphQL.ObjectType("SequenceNumbersGroupBy", {})
export class SequenceNumbersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sequenceNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteOrCompany!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  period!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  complement!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  sequenceValue!: Prisma.Decimal;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => SequenceNumbersCountAggregate, {
    nullable: true
  })
  _count!: SequenceNumbersCountAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersAvgAggregate, {
    nullable: true
  })
  _avg!: SequenceNumbersAvgAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersSumAggregate, {
    nullable: true
  })
  _sum!: SequenceNumbersSumAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersMinAggregate, {
    nullable: true
  })
  _min!: SequenceNumbersMinAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersMaxAggregate, {
    nullable: true
  })
  _max!: SequenceNumbersMaxAggregate | null;
}
