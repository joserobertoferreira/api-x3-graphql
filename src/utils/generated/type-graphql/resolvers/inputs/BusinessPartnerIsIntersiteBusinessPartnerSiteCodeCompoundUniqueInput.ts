import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BusinessPartnerIsIntersiteBusinessPartnerSiteCodeCompoundUniqueInput", {})
export class BusinessPartnerIsIntersiteBusinessPartnerSiteCodeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isIntersite!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  businessPartnerSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;
}
