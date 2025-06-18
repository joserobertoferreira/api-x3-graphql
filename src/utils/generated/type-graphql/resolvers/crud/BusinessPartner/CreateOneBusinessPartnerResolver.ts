import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBusinessPartnerArgs } from "./args/CreateOneBusinessPartnerArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class CreateOneBusinessPartnerResolver {
  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: false
  })
  async createOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBusinessPartnerArgs): Promise<BusinessPartner> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
