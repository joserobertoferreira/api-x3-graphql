import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSalesOrderLineArgs } from "./args/CreateOneSalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class CreateOneSalesOrderLineResolver {
  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: false
  })
  async createOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSalesOrderLineArgs): Promise<SalesOrderLine> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
