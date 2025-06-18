import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSalesOrderLineArgs } from "./args/FindFirstSalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class FindFirstSalesOrderLineResolver {
  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async findFirstSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
