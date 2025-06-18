import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSalesOrderOrThrowArgs } from "./args/FindFirstSalesOrderOrThrowArgs";
import { SalesOrder } from "../../../models/SalesOrder";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrder)
export class FindFirstSalesOrderOrThrowResolver {
  @TypeGraphQL.Query(_returns => SalesOrder, {
    nullable: true
  })
  async findFirstSalesOrderOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderOrThrowArgs): Promise<SalesOrder | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrder.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
