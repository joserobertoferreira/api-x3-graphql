import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalesOrderArgs } from "./args/AggregateSalesOrderArgs";
import { SalesOrder } from "../../../models/SalesOrder";
import { AggregateSalesOrder } from "../../outputs/AggregateSalesOrder";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class AggregateSalesOrderResolver {
  @TypeGraphQL.Query(_returns => AggregateSalesOrder, {
    nullable: false
  })
  async aggregateSalesOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalesOrderArgs): Promise<AggregateSalesOrder> {
    return getPrismaFromContext(ctx).salesOrder.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
