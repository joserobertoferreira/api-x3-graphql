import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAnalyticalAccountingLinesArgs } from "./args/UpsertOneAnalyticalAccountingLinesArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class UpsertOneAnalyticalAccountingLinesResolver {
  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: false
  })
  async upsertOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
