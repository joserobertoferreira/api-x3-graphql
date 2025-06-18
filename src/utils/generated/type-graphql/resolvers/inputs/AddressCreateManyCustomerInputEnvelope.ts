import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyCustomerInput } from "../inputs/AddressCreateManyCustomerInput";

@TypeGraphQL.InputType("AddressCreateManyCustomerInputEnvelope", {})
export class AddressCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [AddressCreateManyCustomerInput], {
    nullable: false
  })
  data!: AddressCreateManyCustomerInput[];
}
