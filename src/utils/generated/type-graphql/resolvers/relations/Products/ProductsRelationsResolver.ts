import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Products } from "../../../models/Products";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { ProductsSalesOrderLinesArgs } from "./args/ProductsSalesOrderLinesArgs";
import { ProductsSalesOrderPricesArgs } from "./args/ProductsSalesOrderPricesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Products)
export class ProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SalesOrderLine], {
    nullable: false
  })
  async salesOrderLines(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ProductsSalesOrderLinesArgs): Promise<SalesOrderLine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).products.findUniqueOrThrow({
      where: {
        ROWID: products.ROWID,
      },
    }).salesOrderLines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SalesOrderPrice], {
    nullable: false
  })
  async salesOrderPrices(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ProductsSalesOrderPricesArgs): Promise<SalesOrderPrice[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).products.findUniqueOrThrow({
      where: {
        ROWID: products.ROWID,
      },
    }).salesOrderPrices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
