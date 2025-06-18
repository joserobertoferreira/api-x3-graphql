import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateWithoutCustomerInput } from "../inputs/AddressCreateWithoutCustomerInput";
import { AddressUpdateWithoutCustomerInput } from "../inputs/AddressUpdateWithoutCustomerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpsertWithWhereUniqueWithoutCustomerInput", {})
export class AddressUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: AddressUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: AddressCreateWithoutCustomerInput;
}
