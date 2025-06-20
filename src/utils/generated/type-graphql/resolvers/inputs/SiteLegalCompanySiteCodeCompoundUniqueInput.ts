import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SiteLegalCompanySiteCodeCompoundUniqueInput", {})
export class SiteLegalCompanySiteCodeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legalCompany!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteCode!: string;
}
