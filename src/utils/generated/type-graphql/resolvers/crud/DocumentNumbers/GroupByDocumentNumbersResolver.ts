import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentNumbersArgs } from "./args/GroupByDocumentNumbersArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { DocumentNumbersGroupBy } from "../../outputs/DocumentNumbersGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class GroupByDocumentNumbersResolver {
  @TypeGraphQL.Query(_returns => [DocumentNumbersGroupBy], {
    nullable: false
  })
  async groupByDocumentNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDocumentNumbersArgs): Promise<DocumentNumbersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
