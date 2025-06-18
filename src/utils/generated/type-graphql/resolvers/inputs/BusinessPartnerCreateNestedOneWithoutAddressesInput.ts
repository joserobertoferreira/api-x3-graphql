import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateOrConnectWithoutAddressesInput } from "../inputs/BusinessPartnerCreateOrConnectWithoutAddressesInput";
import { BusinessPartnerCreateWithoutAddressesInput } from "../inputs/BusinessPartnerCreateWithoutAddressesInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerCreateNestedOneWithoutAddressesInput", {})
export class BusinessPartnerCreateNestedOneWithoutAddressesInput {
  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: BusinessPartnerCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: BusinessPartnerCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: true
  })
  connect?: BusinessPartnerWhereUniqueInput | undefined;
}
