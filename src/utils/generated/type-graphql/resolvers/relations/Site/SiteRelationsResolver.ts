import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Company } from "../../../models/Company";
import { Site } from "../../../models/Site";
import { SiteCompanyArgs } from "./args/SiteCompanyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Site)
export class SiteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Root() site: Site, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SiteCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).site.findUniqueOrThrow({
      where: {
        ROWID: site.ROWID,
      },
    }).company({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
