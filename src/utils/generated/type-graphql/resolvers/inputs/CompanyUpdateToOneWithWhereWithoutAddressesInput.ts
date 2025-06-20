import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateWithoutAddressesInput } from "../inputs/CompanyUpdateWithoutAddressesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpdateToOneWithWhereWithoutAddressesInput", {})
export class CompanyUpdateToOneWithWhereWithoutAddressesInput {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutAddressesInput, {
    nullable: false
  })
  data!: CompanyUpdateWithoutAddressesInput;
}
