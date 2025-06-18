import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBusinessPartnerOrThrowArgs } from "./args/FindFirstBusinessPartnerOrThrowArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class FindFirstBusinessPartnerOrThrowResolver {
  @TypeGraphQL.Query(_returns => BusinessPartner, {
    nullable: true
  })
  async findFirstBusinessPartnerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBusinessPartnerOrThrowArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
