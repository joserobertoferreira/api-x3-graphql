import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerUpdateWithoutCustomerInput } from "../inputs/BusinessPartnerUpdateWithoutCustomerInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.InputType("BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput", {})
export class BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: BusinessPartnerUpdateWithoutCustomerInput;
}
