import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyBusinessPartnerArgs } from "./args/FindManyBusinessPartnerArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class FindManyBusinessPartnerResolver {
  @TypeGraphQL.Query(_returns => [BusinessPartner], {
    nullable: false
  })
  async businessPartners(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBusinessPartnerArgs): Promise<BusinessPartner[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
