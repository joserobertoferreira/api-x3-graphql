import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAnalyticalAccountingLinesArgs } from "./args/CreateOneAnalyticalAccountingLinesArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class CreateOneAnalyticalAccountingLinesResolver {
  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: false
  })
  async createOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
