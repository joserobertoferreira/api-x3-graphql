import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBusinessPartnerArgs } from "./args/GroupByBusinessPartnerArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { BusinessPartnerGroupBy } from "../../outputs/BusinessPartnerGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class GroupByBusinessPartnerResolver {
  @TypeGraphQL.Query(_returns => [BusinessPartnerGroupBy], {
    nullable: false
  })
  async groupByBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBusinessPartnerArgs): Promise<BusinessPartnerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
