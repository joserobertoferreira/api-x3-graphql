import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAnalyticalAccountingLinesOrThrowArgs } from "./args/FindFirstAnalyticalAccountingLinesOrThrowArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class FindFirstAnalyticalAccountingLinesOrThrowResolver {
  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findFirstAnalyticalAccountingLinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalyticalAccountingLinesOrThrowArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
