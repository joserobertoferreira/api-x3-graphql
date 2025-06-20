import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticalAccountingLinesAvgAggregate } from "../outputs/AnalyticalAccountingLinesAvgAggregate";
import { AnalyticalAccountingLinesCountAggregate } from "../outputs/AnalyticalAccountingLinesCountAggregate";
import { AnalyticalAccountingLinesMaxAggregate } from "../outputs/AnalyticalAccountingLinesMaxAggregate";
import { AnalyticalAccountingLinesMinAggregate } from "../outputs/AnalyticalAccountingLinesMinAggregate";
import { AnalyticalAccountingLinesSumAggregate } from "../outputs/AnalyticalAccountingLinesSumAggregate";

@TypeGraphQL.ObjectType("AnalyticalAccountingLinesGroupBy", {})
export class AnalyticalAccountingLinesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  abbreviation!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  typ!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  document!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sequenceNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyComplement!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sortValue!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ledger10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chartCode10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  generalAccounts10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  distribution!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nonFinancialUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantity!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  currency!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  amount!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesCountAggregate, {
    nullable: true
  })
  _count!: AnalyticalAccountingLinesCountAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesAvgAggregate, {
    nullable: true
  })
  _avg!: AnalyticalAccountingLinesAvgAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesSumAggregate, {
    nullable: true
  })
  _sum!: AnalyticalAccountingLinesSumAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesMinAggregate, {
    nullable: true
  })
  _min!: AnalyticalAccountingLinesMinAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesMaxAggregate, {
    nullable: true
  })
  _max!: AnalyticalAccountingLinesMaxAggregate | null;
}
