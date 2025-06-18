import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateWithoutBusinessPartnerInput } from "../inputs/AddressCreateWithoutBusinessPartnerInput";
import { AddressUpdateWithoutBusinessPartnerInput } from "../inputs/AddressUpdateWithoutBusinessPartnerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput", {})
export class AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: false
  })
  where!: AddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutBusinessPartnerInput, {
    nullable: false
  })
  update!: AddressUpdateWithoutBusinessPartnerInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutBusinessPartnerInput, {
    nullable: false
  })
  create!: AddressCreateWithoutBusinessPartnerInput;
}
