import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutAddressesInput } from "../inputs/CustomerUpdateWithoutAddressesInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutAddressesInput", {})
export class CustomerUpdateToOneWithWhereWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressesInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutAddressesInput;
}
