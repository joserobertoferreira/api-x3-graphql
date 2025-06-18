import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CountriesMaxAggregate", {})
export class CountriesMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  countryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;
}
