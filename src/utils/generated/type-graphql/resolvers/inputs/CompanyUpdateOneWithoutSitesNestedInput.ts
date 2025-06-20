import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutSitesInput } from "../inputs/CompanyCreateOrConnectWithoutSitesInput";
import { CompanyCreateWithoutSitesInput } from "../inputs/CompanyCreateWithoutSitesInput";
import { CompanyUpdateToOneWithWhereWithoutSitesInput } from "../inputs/CompanyUpdateToOneWithWhereWithoutSitesInput";
import { CompanyUpsertWithoutSitesInput } from "../inputs/CompanyUpsertWithoutSitesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneWithoutSitesNestedInput", {})
export class CompanyUpdateOneWithoutSitesNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutSitesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutSitesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutSitesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutSitesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutSitesInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutSitesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  disconnect?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  delete?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateToOneWithWhereWithoutSitesInput, {
    nullable: true
  })
  update?: CompanyUpdateToOneWithWhereWithoutSitesInput | undefined;
}
