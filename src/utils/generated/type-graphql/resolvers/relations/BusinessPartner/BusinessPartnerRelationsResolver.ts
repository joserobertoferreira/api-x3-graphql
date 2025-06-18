import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { BusinessPartnerAddressesArgs } from "./args/BusinessPartnerAddressesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class BusinessPartnerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: false
  })
  async addresses(@TypeGraphQL.Root() businessPartner: BusinessPartner, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BusinessPartnerAddressesArgs): Promise<Address[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findUniqueOrThrow({
      where: {
        id: businessPartner.id,
      },
    }).addresses({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
