import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutCustomerInput } from "../inputs/AddressUpdateWithoutCustomerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateWithWhereUniqueWithoutCustomerInput", {})
export class AddressUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutCustomerInput;
}
