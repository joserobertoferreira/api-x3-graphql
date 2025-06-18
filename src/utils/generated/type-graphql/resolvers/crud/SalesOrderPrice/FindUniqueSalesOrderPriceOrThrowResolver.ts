import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSalesOrderPriceOrThrowArgs } from "./args/FindUniqueSalesOrderPriceOrThrowArgs";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class FindUniqueSalesOrderPriceOrThrowResolver {
  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async getSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderPriceOrThrowArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
