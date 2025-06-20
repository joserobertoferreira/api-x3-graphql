import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAnalyticalAccountingLinesArgs } from "./args/FindFirstAnalyticalAccountingLinesArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class FindFirstAnalyticalAccountingLinesResolver {
  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findFirstAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
