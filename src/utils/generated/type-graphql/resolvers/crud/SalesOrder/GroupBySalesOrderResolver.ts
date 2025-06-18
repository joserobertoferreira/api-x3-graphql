import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySalesOrderArgs } from "./args/GroupBySalesOrderArgs";
import { SalesOrder } from "../../../models/SalesOrder";
import { SalesOrderGroupBy } from "../../outputs/SalesOrderGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class GroupBySalesOrderResolver {
  @TypeGraphQL.Query(_returns => [SalesOrderGroupBy], {
    nullable: false
  })
  async groupBySalesOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySalesOrderArgs): Promise<SalesOrderGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
