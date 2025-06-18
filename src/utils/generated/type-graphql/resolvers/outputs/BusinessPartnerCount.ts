import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCountAddressesArgs } from "./args/BusinessPartnerCountAddressesArgs";

@TypeGraphQL.ObjectType("BusinessPartnerCount", {})
export class BusinessPartnerCount {
  addresses!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "addresses",
    nullable: false
  })
  getAddresses(@TypeGraphQL.Root() root: BusinessPartnerCount, @TypeGraphQL.Args() args: BusinessPartnerCountAddressesArgs): number {
    return root.addresses;
  }
}
