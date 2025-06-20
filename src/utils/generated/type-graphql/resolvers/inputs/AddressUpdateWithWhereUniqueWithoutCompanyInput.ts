import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutCompanyInput } from "../inputs/AddressUpdateWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateWithWhereUniqueWithoutCompanyInput", {})
export class AddressUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCompanyInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutCompanyInput;
}
