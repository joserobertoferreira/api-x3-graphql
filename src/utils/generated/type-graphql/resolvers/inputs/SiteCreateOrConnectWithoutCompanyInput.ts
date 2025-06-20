import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteCreateWithoutCompanyInput } from "../inputs/SiteCreateWithoutCompanyInput";
import { SiteWhereUniqueInput } from "../inputs/SiteWhereUniqueInput";

@TypeGraphQL.InputType("SiteCreateOrConnectWithoutCompanyInput", {})
export class SiteCreateOrConnectWithoutCompanyInput {
  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: false
  })
  where!: SiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => SiteCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: SiteCreateWithoutCompanyInput;
}
