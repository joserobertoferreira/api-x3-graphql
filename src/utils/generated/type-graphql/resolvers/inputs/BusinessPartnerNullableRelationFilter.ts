import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerWhereInput } from "../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.InputType("BusinessPartnerNullableRelationFilter", {})
export class BusinessPartnerNullableRelationFilter {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  is?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  isNot?: BusinessPartnerWhereInput | undefined;
}
