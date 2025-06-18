import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutBusinessPartnerInput } from "../inputs/AddressUpdateWithoutBusinessPartnerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput", {})
export class AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutBusinessPartnerInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutBusinessPartnerInput;
}
