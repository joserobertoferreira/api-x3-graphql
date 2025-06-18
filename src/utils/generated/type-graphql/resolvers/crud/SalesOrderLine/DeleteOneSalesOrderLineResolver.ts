import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSalesOrderLineArgs } from "./args/DeleteOneSalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class DeleteOneSalesOrderLineResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: true
  })
  async deleteOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
