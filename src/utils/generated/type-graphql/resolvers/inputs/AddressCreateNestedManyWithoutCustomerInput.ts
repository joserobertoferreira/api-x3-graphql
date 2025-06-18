import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyCustomerInputEnvelope } from "../inputs/AddressCreateManyCustomerInputEnvelope";
import { AddressCreateOrConnectWithoutCustomerInput } from "../inputs/AddressCreateOrConnectWithoutCustomerInput";
import { AddressCreateWithoutCustomerInput } from "../inputs/AddressCreateWithoutCustomerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressCreateNestedManyWithoutCustomerInput", {})
export class AddressCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: AddressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  connect?: AddressWhereUniqueInput[] | undefined;
}
