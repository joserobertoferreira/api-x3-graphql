import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSalesOrderLineOrThrowArgs } from "./args/FindFirstSalesOrderLineOrThrowArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class FindFirstSalesOrderLineOrThrowResolver {
  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async findFirstSalesOrderLineOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderLineOrThrowArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
