import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSalesOrderPriceArgs } from "./args/UpsertOneSalesOrderPriceArgs";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class UpsertOneSalesOrderPriceResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: false
  })
  async upsertOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSalesOrderPriceArgs): Promise<SalesOrderPrice> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
