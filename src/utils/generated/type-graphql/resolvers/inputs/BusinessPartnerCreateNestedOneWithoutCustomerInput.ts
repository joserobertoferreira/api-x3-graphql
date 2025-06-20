import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateOrConnectWithoutCustomerInput } from "../inputs/BusinessPartnerCreateOrConnectWithoutCustomerInput";
import { BusinessPartnerCreateWithoutCustomerInput } from "../inputs/BusinessPartnerCreateWithoutCustomerInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerCreateNestedOneWithoutCustomerInput", {})
export class BusinessPartnerCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: BusinessPartnerCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: BusinessPartnerCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: true
  })
  connect?: BusinessPartnerWhereUniqueInput | undefined;
}
