import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateWithoutBusinessPartnerInput } from "../inputs/AddressCreateWithoutBusinessPartnerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressCreateOrConnectWithoutBusinessPartnerInput", {})
export class AddressCreateOrConnectWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutBusinessPartnerInput, {
    nullable: false
  })
  create!: AddressCreateWithoutBusinessPartnerInput;
}
