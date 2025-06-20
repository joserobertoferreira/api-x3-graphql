import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAnalyticalAccountingLinesArgs } from "./args/AggregateAnalyticalAccountingLinesArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { AggregateAnalyticalAccountingLines } from "../../outputs/AggregateAnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class AggregateAnalyticalAccountingLinesResolver {
  @TypeGraphQL.Query(_returns => AggregateAnalyticalAccountingLines, {
    nullable: false
  })
  async aggregateAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnalyticalAccountingLinesArgs): Promise<AggregateAnalyticalAccountingLines> {
    return getPrismaFromContext(ctx).analyticalAccountingLines.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
