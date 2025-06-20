import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutBusinessPartnerInput } from "../inputs/CustomerCreateWithoutBusinessPartnerInput";
import { CustomerUpdateWithoutBusinessPartnerInput } from "../inputs/CustomerUpdateWithoutBusinessPartnerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutBusinessPartnerInput", {})
export class CustomerUpsertWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutBusinessPartnerInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutBusinessPartnerInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutBusinessPartnerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutBusinessPartnerInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
