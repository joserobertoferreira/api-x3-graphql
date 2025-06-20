import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AnalyticalAccountingLinesMinAggregate", {})
export class AnalyticalAccountingLinesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  abbreviation!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typ!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sequenceNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keyComplement!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sortValue!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distribution!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nonFinancialUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantity!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  amount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
