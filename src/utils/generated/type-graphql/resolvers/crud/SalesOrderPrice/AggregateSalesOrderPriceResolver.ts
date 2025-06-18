import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalesOrderPriceArgs } from "./args/AggregateSalesOrderPriceArgs";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { AggregateSalesOrderPrice } from "../../outputs/AggregateSalesOrderPrice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class AggregateSalesOrderPriceResolver {
  @TypeGraphQL.Query(_returns => AggregateSalesOrderPrice, {
    nullable: false
  })
  async aggregateSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalesOrderPriceArgs): Promise<AggregateSalesOrderPrice> {
    return getPrismaFromContext(ctx).salesOrderPrice.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
