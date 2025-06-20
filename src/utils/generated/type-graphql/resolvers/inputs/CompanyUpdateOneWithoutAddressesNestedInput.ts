import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutAddressesInput } from "../inputs/CompanyCreateOrConnectWithoutAddressesInput";
import { CompanyCreateWithoutAddressesInput } from "../inputs/CompanyCreateWithoutAddressesInput";
import { CompanyUpdateToOneWithWhereWithoutAddressesInput } from "../inputs/CompanyUpdateToOneWithWhereWithoutAddressesInput";
import { CompanyUpsertWithoutAddressesInput } from "../inputs/CompanyUpsertWithoutAddressesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneWithoutAddressesNestedInput", {})
export class CompanyUpdateOneWithoutAddressesNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutAddressesInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  disconnect?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  delete?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateToOneWithWhereWithoutAddressesInput, {
    nullable: true
  })
  update?: CompanyUpdateToOneWithWhereWithoutAddressesInput | undefined;
}
