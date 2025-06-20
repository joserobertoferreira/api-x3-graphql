import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { Company } from "../../../models/Company";
import { Customer } from "../../../models/Customer";
import { AddressBusinessPartnerArgs } from "./args/AddressBusinessPartnerArgs";
import { AddressCompanyArgs } from "./args/AddressCompanyArgs";
import { AddressCustomerArgs } from "./args/AddressCustomerArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Address)
export class AddressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => BusinessPartner, {
    nullable: true
  })
  async businessPartner(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        ROWID: address.ROWID,
      },
    }).businessPartner({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async customer(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressCustomerArgs): Promise<Customer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        ROWID: address.ROWID,
      },
    }).customer({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        ROWID: address.ROWID,
      },
    }).company({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
