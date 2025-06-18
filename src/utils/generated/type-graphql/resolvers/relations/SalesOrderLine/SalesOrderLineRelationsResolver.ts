import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Products } from "../../../models/Products";
import { SalesOrder } from "../../../models/SalesOrder";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { SalesOrderLineOrderArgs } from "./args/SalesOrderLineOrderArgs";
import { SalesOrderLinePriceArgs } from "./args/SalesOrderLinePriceArgs";
import { SalesOrderLineProductDetailsArgs } from "./args/SalesOrderLineProductDetailsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class SalesOrderLineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => SalesOrder, {
    nullable: true
  })
  async order(@TypeGraphQL.Root() salesOrderLine: SalesOrderLine, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderLineOrderArgs): Promise<SalesOrder | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findUniqueOrThrow({
      where: {
        ROWID: salesOrderLine.ROWID,
      },
    }).order({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => SalesOrderPrice, {
    nullable: true
  })
  async price(@TypeGraphQL.Root() salesOrderLine: SalesOrderLine, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderLinePriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findUniqueOrThrow({
      where: {
        ROWID: salesOrderLine.ROWID,
      },
    }).price({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async productDetails(@TypeGraphQL.Root() salesOrderLine: SalesOrderLine, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SalesOrderLineProductDetailsArgs): Promise<Products | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findUniqueOrThrow({
      where: {
        ROWID: salesOrderLine.ROWID,
      },
    }).productDetails({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
