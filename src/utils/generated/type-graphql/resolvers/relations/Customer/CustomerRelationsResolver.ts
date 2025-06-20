import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { Customer } from "../../../models/Customer";
import { CustomerAddressesArgs } from "./args/CustomerAddressesArgs";
import { CustomerBusinessPartnerArgs } from "./args/CustomerBusinessPartnerArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: false
  })
  async addresses(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CustomerAddressesArgs): Promise<Address[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        id: customer.id,
      },
    }).addresses({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => BusinessPartner, {
    nullable: true
  })
  async businessPartner(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CustomerBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        id: customer.id,
      },
    }).businessPartner({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
