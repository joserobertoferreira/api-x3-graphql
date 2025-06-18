import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalesOrderLineArgs } from "./args/AggregateSalesOrderLineArgs";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { AggregateSalesOrderLine } from "../../outputs/AggregateSalesOrderLine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class AggregateSalesOrderLineResolver {
  @TypeGraphQL.Query(_returns => AggregateSalesOrderLine, {
    nullable: false
  })
  async aggregateSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalesOrderLineArgs): Promise<AggregateSalesOrderLine> {
    return getPrismaFromContext(ctx).salesOrderLine.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
