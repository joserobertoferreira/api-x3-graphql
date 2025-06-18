import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CountriesCreateInput", {})
export class CountriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  countryName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;
}
