import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateWithoutSitesInput } from "../inputs/CompanyUpdateWithoutSitesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpdateToOneWithWhereWithoutSitesInput", {})
export class CompanyUpdateToOneWithWhereWithoutSitesInput {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutSitesInput, {
    nullable: false
  })
  data!: CompanyUpdateWithoutSitesInput;
}
