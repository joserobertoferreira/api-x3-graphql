import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutSitesInput } from "../inputs/CompanyCreateWithoutSitesInput";
import { CompanyUpdateWithoutSitesInput } from "../inputs/CompanyUpdateWithoutSitesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutSitesInput", {})
export class CompanyUpsertWithoutSitesInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutSitesInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutSitesInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutSitesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutSitesInput;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;
}
