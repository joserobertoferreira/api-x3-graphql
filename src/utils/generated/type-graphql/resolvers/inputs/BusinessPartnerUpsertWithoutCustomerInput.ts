import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateWithoutCustomerInput } from "../inputs/BusinessPartnerCreateWithoutCustomerInput";
import { BusinessPartnerUpdateWithoutCustomerInput } from "../inputs/BusinessPartnerUpdateWithoutCustomerInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.InputType("BusinessPartnerUpsertWithoutCustomerInput", {})
export class BusinessPartnerUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => BusinessPartnerUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: BusinessPartnerUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: BusinessPartnerCreateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;
}
