import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutAddressesInput } from "../inputs/CustomerCreateOrConnectWithoutAddressesInput";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutAddressesInput", {})
export class CustomerCreateNestedOneWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
