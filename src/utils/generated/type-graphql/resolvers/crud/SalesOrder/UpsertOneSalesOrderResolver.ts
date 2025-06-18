import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSalesOrderArgs } from "./args/UpsertOneSalesOrderArgs";
import { SalesOrder } from "../../../models/SalesOrder";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class UpsertOneSalesOrderResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrder, {
    nullable: false
  })
  async upsertOneSalesOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSalesOrderArgs): Promise<SalesOrder> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
