import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutBusinessPartnerInput } from "../inputs/CustomerCreateWithoutBusinessPartnerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutBusinessPartnerInput", {})
export class CustomerCreateOrConnectWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutBusinessPartnerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutBusinessPartnerInput;
}
