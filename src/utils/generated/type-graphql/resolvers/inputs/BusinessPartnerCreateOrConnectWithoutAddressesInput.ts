import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateWithoutAddressesInput } from "../inputs/BusinessPartnerCreateWithoutAddressesInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerCreateOrConnectWithoutAddressesInput", {})
export class BusinessPartnerCreateOrConnectWithoutAddressesInput {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessPartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: BusinessPartnerCreateWithoutAddressesInput;
}
