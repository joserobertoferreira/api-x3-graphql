import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderTypeOrThrowArgs } from "./args/FindUniqueOrderTypeOrThrowArgs";
import { OrderType } from "../../../models/OrderType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderType)
export class FindUniqueOrderTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => OrderType, {
    nullable: true
  })
  async getOrderType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOrderTypeOrThrowArgs): Promise<OrderType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).orderType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
