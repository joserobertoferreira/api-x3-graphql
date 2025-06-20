import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutAddressesInput } from "../inputs/CompanyCreateOrConnectWithoutAddressesInput";
import { CompanyCreateWithoutAddressesInput } from "../inputs/CompanyCreateWithoutAddressesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedOneWithoutAddressesInput", {})
export class CompanyCreateNestedOneWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
