import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressCreateOrConnectWithoutCompanyInput", {})
export class AddressCreateOrConnectWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: AddressCreateWithoutCompanyInput;
}
