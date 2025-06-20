import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticalAccountingLinesAvgAggregate } from "../outputs/AnalyticalAccountingLinesAvgAggregate";
import { AnalyticalAccountingLinesCountAggregate } from "../outputs/AnalyticalAccountingLinesCountAggregate";
import { AnalyticalAccountingLinesMaxAggregate } from "../outputs/AnalyticalAccountingLinesMaxAggregate";
import { AnalyticalAccountingLinesMinAggregate } from "../outputs/AnalyticalAccountingLinesMinAggregate";
import { AnalyticalAccountingLinesSumAggregate } from "../outputs/AnalyticalAccountingLinesSumAggregate";

@TypeGraphQL.ObjectType("AggregateAnalyticalAccountingLines", {})
export class AggregateAnalyticalAccountingLines {
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
