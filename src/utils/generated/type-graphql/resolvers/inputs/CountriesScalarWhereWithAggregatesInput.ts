import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CountriesScalarWhereWithAggregatesInput", {})
export class CountriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CountriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CountriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CountriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  code?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  countryName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  language?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  currency?: StringWithAggregatesFilter | undefined;
}
