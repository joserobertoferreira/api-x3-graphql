import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesWhereInput } from "../inputs/CountriesWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CountriesWhereUniqueInput", {})
export class CountriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

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
