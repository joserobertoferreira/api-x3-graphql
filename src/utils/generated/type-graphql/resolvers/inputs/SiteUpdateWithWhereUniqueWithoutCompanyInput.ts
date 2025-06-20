import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteUpdateWithoutCompanyInput } from "../inputs/SiteUpdateWithoutCompanyInput";
import { SiteWhereUniqueInput } from "../inputs/SiteWhereUniqueInput";

@TypeGraphQL.InputType("SiteUpdateWithWhereUniqueWithoutCompanyInput", {})
export class SiteUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: false
  })
  where!: SiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => SiteUpdateWithoutCompanyInput, {
    nullable: false
  })
  data!: SiteUpdateWithoutCompanyInput;
}
