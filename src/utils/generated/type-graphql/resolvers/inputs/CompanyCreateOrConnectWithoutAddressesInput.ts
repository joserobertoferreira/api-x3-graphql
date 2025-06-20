import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutAddressesInput } from "../inputs/CompanyCreateWithoutAddressesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateOrConnectWithoutAddressesInput", {})
export class CompanyCreateOrConnectWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutAddressesInput;
}
