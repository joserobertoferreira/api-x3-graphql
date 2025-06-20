import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerCreateOrConnectWithoutCustomerInput } from "../inputs/BusinessPartnerCreateOrConnectWithoutCustomerInput";
import { BusinessPartnerCreateWithoutCustomerInput } from "../inputs/BusinessPartnerCreateWithoutCustomerInput";
import { BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput } from "../inputs/BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput";
import { BusinessPartnerUpsertWithoutCustomerInput } from "../inputs/BusinessPartnerUpsertWithoutCustomerInput";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";
import { BusinessPartnerWhereUniqueInput } from "../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.InputType("BusinessPartnerUpdateOneWithoutCustomerNestedInput", {})
export class BusinessPartnerUpdateOneWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => BusinessPartnerCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: BusinessPartnerCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: BusinessPartnerCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerUpsertWithoutCustomerInput, {
    nullable: true
  })
  upsert?: BusinessPartnerUpsertWithoutCustomerInput | undefined;

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

  @TypeGraphQL.Field(_type => BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput, {
    nullable: true
  })
  update?: BusinessPartnerUpdateToOneWithWhereWithoutCustomerInput | undefined;
}
