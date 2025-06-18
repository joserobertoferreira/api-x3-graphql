import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutAddressesInput } from "../inputs/CustomerCreateOrConnectWithoutAddressesInput";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerUpdateToOneWithWhereWithoutAddressesInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutAddressesInput";
import { CustomerUpsertWithoutAddressesInput } from "../inputs/CustomerUpsertWithoutAddressesInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutAddressesNestedInput", {})
export class CustomerUpdateOneWithoutAddressesNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutAddressesInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  disconnect?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  delete?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutAddressesInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutAddressesInput | undefined;
}
