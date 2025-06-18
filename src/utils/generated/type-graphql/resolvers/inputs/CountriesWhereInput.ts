import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CountriesWhereInput", {})
export class CountriesWhereInput {
  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  AND?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  OR?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesWhereInput], {
    nullable: true
  })
  NOT?: CountriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  countryName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  language?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  currency?: StringFilter | undefined;
}
