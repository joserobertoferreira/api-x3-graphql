import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AnalyticalAccountingLinesCreateManyInput", {})
export class AnalyticalAccountingLinesCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  abbreviation?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typ?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineNumber?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sequenceNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keyComplement?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sortValue?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ledger10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chartCode10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  generalAccounts10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distribution?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nonFinancialUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantity?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  amount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

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
}
