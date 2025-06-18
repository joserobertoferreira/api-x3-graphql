import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCountriesArgs } from "./args/GroupByCountriesArgs";
import { Countries } from "../../../models/Countries";
import { CountriesGroupBy } from "../../outputs/CountriesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Countries)
export class GroupByCountriesResolver {
  @TypeGraphQL.Query(_returns => [CountriesGroupBy], {
    nullable: false
  })
  async groupByCountries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCountriesArgs): Promise<CountriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).countries.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
