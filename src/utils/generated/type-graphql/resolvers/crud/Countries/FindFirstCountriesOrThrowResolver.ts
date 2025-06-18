import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCountriesOrThrowArgs } from "./args/FindFirstCountriesOrThrowArgs";
import { Countries } from "../../../models/Countries";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Countries)
export class FindFirstCountriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Countries, {
    nullable: true
  })
  async findFirstCountriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCountriesOrThrowArgs): Promise<Countries | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).countries.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
