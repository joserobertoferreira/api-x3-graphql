import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutSitesInput } from "../inputs/CompanyCreateOrConnectWithoutSitesInput";
import { CompanyCreateWithoutSitesInput } from "../inputs/CompanyCreateWithoutSitesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedOneWithoutSitesInput", {})
export class CompanyCreateNestedOneWithoutSitesInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutSitesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutSitesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutSitesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutSitesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
