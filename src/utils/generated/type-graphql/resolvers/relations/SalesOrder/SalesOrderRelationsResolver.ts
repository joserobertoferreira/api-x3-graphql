import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { SalesOrder } from "../../../models/SalesOrder";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { SalesOrderOrderLinesArgs } from "./args/SalesOrderOrderLinesArgs";
import { SalesOrderOrderPricesArgs } from "./args/SalesOrderOrderPricesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class SalesOrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SalesOrderLine], {
    nullable: false
  })
  async orderLines(@TypeGraphQL.Root() salesOrder: SalesOrder, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderOrderLinesArgs): Promise<SalesOrderLine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.findUniqueOrThrow({
      where: {
        ROWID: salesOrder.ROWID,
      },
    }).orderLines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SalesOrderPrice], {
    nullable: false
  })
  async orderPrices(@TypeGraphQL.Root() salesOrder: SalesOrder, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderOrderPricesArgs): Promise<SalesOrderPrice[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.findUniqueOrThrow({
      where: {
        ROWID: salesOrder.ROWID,
      },
    }).orderPrices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
