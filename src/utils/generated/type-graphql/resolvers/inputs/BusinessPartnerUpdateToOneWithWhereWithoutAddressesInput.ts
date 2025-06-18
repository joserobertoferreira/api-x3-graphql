import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerUpdateWithoutAddressesInput } from "../inputs/BusinessPartnerUpdateWithoutAddressesInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.InputType("BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput", {})
export class BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerUpdateWithoutAddressesInput, {
    nullable: false
  })
  data!: BusinessPartnerUpdateWithoutAddressesInput;
}
