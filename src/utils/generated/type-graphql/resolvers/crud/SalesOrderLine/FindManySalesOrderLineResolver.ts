import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManySalesOrderLineArgs } from "./args/FindManySalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class FindManySalesOrderLineResolver {
  @TypeGraphQL.Query(_returns => [SalesOrderLine], {
    nullable: false
  })
  async salesOrderLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySalesOrderLineArgs): Promise<SalesOrderLine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
