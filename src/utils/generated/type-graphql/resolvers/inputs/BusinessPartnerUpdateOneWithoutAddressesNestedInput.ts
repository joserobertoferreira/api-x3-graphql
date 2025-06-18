import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateOrConnectWithoutAddressesInput } from "../inputs/BusinessPartnerCreateOrConnectWithoutAddressesInput";
import { BusinessPartnerCreateWithoutAddressesInput } from "../inputs/BusinessPartnerCreateWithoutAddressesInput";
import { BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput } from "../inputs/BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput";
import { BusinessPartnerUpsertWithoutAddressesInput } from "../inputs/BusinessPartnerUpsertWithoutAddressesInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerUpdateOneWithoutAddressesNestedInput", {})
export class BusinessPartnerUpdateOneWithoutAddressesNestedInput {
  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutAddressesInput, {
    nullable: true
  })
  create?: BusinessPartnerCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateOrConnectWithoutAddressesInput, {
    nullable: true
  })
  connectOrCreate?: BusinessPartnerCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerUpsertWithoutAddressesInput, {
    nullable: true
  })
  upsert?: BusinessPartnerUpsertWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  disconnect?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  delete?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: true
  })
  connect?: BusinessPartnerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput, {
    nullable: true
  })
  update?: BusinessPartnerUpdateToOneWithWhereWithoutAddressesInput | undefined;
}
