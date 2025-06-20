import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Company } from "../../../models/Company";
import { Site } from "../../../models/Site";
import { CompanyAddressesArgs } from "./args/CompanyAddressesArgs";
import { CompanySitesArgs } from "./args/CompanySitesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: false
  })
  async addresses(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CompanyAddressesArgs): Promise<Address[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUniqueOrThrow({
      where: {
        ROWID: company.ROWID,
      },
    }).addresses({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Site], {
    nullable: false
  })
  async sites(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CompanySitesArgs): Promise<Site[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUniqueOrThrow({
      where: {
        ROWID: company.ROWID,
      },
    }).sites({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
