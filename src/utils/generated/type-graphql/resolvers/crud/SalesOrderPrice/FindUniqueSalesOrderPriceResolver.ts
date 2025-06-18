import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSalesOrderPriceArgs } from "./args/FindUniqueSalesOrderPriceArgs";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class FindUniqueSalesOrderPriceResolver {
  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async salesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
