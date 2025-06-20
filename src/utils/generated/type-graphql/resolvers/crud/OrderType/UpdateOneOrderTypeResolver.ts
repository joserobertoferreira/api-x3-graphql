import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrderTypeArgs } from "./args/UpdateOneOrderTypeArgs";
import { OrderType } from "../../../models/OrderType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderType)
export class UpdateOneOrderTypeResolver {
  @TypeGraphQL.Mutation(_returns => OrderType, {
    nullable: true
  })
  async updateOneOrderType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneOrderTypeArgs): Promise<OrderType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).orderType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
