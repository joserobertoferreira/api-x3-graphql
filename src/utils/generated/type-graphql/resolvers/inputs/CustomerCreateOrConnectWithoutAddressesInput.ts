import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutAddressesInput", {})
export class CustomerCreateOrConnectWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutAddressesInput;
}
