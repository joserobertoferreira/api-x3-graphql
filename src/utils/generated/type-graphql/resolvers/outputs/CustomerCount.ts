import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCountAddressesArgs } from "./args/CustomerCountAddressesArgs";

@TypeGraphQL.ObjectType("CustomerCount", {})
export class CustomerCount {
  addresses!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "addresses",
    nullable: false
  })
  getAddresses(@TypeGraphQL.Root() root: CustomerCount, @TypeGraphQL.Args() args: CustomerCountAddressesArgs): number {
    return root.addresses;
  }
}
