import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Customer } from "../../../models/Customer";
import { CustomerAddressesArgs } from "./args/CustomerAddressesArgs";
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
}
