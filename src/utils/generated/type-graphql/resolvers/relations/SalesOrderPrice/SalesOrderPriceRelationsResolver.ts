import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Products } from "../../../models/Products";
import { SalesOrder } from "../../../models/SalesOrder";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { SalesOrderPriceLineArgs } from "./args/SalesOrderPriceLineArgs";
import { SalesOrderPriceOrderArgs } from "./args/SalesOrderPriceOrderArgs";
import { SalesOrderPriceProductDetailsArgs } from "./args/SalesOrderPriceProductDetailsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class SalesOrderPriceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => SalesOrder, {
    nullable: true
  })
  async order(@TypeGraphQL.Root() salesOrderPrice: SalesOrderPrice, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderPriceOrderArgs): Promise<SalesOrder | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUniqueOrThrow({
      where: {
        ROWID: salesOrderPrice.ROWID,
      },
    }).order({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => SalesOrderLine, {
    nullable: true
  })
  async line(@TypeGraphQL.Root() salesOrderPrice: SalesOrderPrice, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderPriceLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUniqueOrThrow({
      where: {
        ROWID: salesOrderPrice.ROWID,
      },
    }).line({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async productDetails(@TypeGraphQL.Root() salesOrderPrice: SalesOrderPrice, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderPriceProductDetailsArgs): Promise<Products | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUniqueOrThrow({
      where: {
        ROWID: salesOrderPrice.ROWID,
      },
    }).productDetails({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
