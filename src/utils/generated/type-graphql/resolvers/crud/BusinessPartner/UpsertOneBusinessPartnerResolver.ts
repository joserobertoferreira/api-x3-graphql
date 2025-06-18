import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBusinessPartnerArgs } from "./args/UpsertOneBusinessPartnerArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class UpsertOneBusinessPartnerResolver {
  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: false
  })
  async upsertOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneBusinessPartnerArgs): Promise<BusinessPartner> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
