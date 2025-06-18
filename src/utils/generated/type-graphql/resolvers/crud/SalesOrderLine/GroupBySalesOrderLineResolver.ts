import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySalesOrderLineArgs } from "./args/GroupBySalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { SalesOrderLineGroupBy } from "../../outputs/SalesOrderLineGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class GroupBySalesOrderLineResolver {
  @TypeGraphQL.Query(_returns => [SalesOrderLineGroupBy], {
    nullable: false
  })
  async groupBySalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySalesOrderLineArgs): Promise<SalesOrderLineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
