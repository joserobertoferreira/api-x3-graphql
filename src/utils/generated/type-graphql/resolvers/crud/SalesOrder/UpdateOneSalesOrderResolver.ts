import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSalesOrderArgs } from "./args/UpdateOneSalesOrderArgs";
import { SalesOrder } from "../../../models/SalesOrder";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class UpdateOneSalesOrderResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrder, {
    nullable: true
  })
  async updateOneSalesOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSalesOrderArgs): Promise<SalesOrder | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
