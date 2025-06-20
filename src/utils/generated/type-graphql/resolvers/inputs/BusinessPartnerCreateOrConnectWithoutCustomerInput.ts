import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateWithoutCustomerInput } from "../inputs/BusinessPartnerCreateWithoutCustomerInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerCreateOrConnectWithoutCustomerInput", {})
export class BusinessPartnerCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessPartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: BusinessPartnerCreateWithoutCustomerInput;
}
