import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSiteArgs } from "./args/AggregateSiteArgs";
import { Site } from "../../../models/Site";
import { AggregateSite } from "../../outputs/AggregateSite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Site)
export class AggregateSiteResolver {
  @TypeGraphQL.Query(_returns => AggregateSite, {
    nullable: false
  })
  async aggregateSite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSiteArgs): Promise<AggregateSite> {
    return getPrismaFromContext(ctx).site.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
