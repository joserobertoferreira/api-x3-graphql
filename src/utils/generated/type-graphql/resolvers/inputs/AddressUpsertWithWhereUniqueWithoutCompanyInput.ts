import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressUpdateWithoutCompanyInput } from "../inputs/AddressUpdateWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpsertWithWhereUniqueWithoutCompanyInput", {})
export class AddressUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutCompanyInput, {
    nullable: false
  })
  update!: AddressUpdateWithoutCompanyInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: AddressCreateWithoutCompanyInput;
}
