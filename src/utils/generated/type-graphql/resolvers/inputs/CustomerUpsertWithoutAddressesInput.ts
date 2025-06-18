import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerUpdateWithoutAddressesInput } from "../inputs/CustomerUpdateWithoutAddressesInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutAddressesInput", {})
export class CustomerUpsertWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressesInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
