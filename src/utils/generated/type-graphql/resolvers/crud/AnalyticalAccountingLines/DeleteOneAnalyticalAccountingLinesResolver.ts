import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAnalyticalAccountingLinesArgs } from "./args/DeleteOneAnalyticalAccountingLinesArgs";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class DeleteOneAnalyticalAccountingLinesResolver {
  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async deleteOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
