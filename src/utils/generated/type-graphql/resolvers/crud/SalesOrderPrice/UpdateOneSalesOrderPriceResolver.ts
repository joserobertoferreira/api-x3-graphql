import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSalesOrderPriceArgs } from "./args/UpdateOneSalesOrderPriceArgs";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class UpdateOneSalesOrderPriceResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: true
  })
  async updateOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
