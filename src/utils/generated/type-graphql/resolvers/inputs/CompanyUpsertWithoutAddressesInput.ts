import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutAddressesInput } from "../inputs/CompanyCreateWithoutAddressesInput";
import { CompanyUpdateWithoutAddressesInput } from "../inputs/CompanyUpdateWithoutAddressesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutAddressesInput", {})
export class CompanyUpsertWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutAddressesInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;
}
