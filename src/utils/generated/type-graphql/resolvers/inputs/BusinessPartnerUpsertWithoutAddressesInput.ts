import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateWithoutAddressesInput } from "../inputs/BusinessPartnerCreateWithoutAddressesInput";
import { BusinessPartnerUpdateWithoutAddressesInput } from "../inputs/BusinessPartnerUpdateWithoutAddressesInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.InputType("BusinessPartnerUpsertWithoutAddressesInput", {})
export class BusinessPartnerUpsertWithoutAddressesInput {
  @TypeGraphQL.Field(_type => BusinessPartnerUpdateWithoutAddressesInput, {
    nullable: false
  })
  update!: BusinessPartnerUpdateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutAddressesInput, {
    nullable: false
  })
  create!: BusinessPartnerCreateWithoutAddressesInput;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;
}
