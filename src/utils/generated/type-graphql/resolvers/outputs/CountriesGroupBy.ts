import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountriesCountAggregate } from "../outputs/CountriesCountAggregate";
import { CountriesMaxAggregate } from "../outputs/CountriesMaxAggregate";
import { CountriesMinAggregate } from "../outputs/CountriesMinAggregate";

@TypeGraphQL.ObjectType("CountriesGroupBy", {})
export class CountriesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  countryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  language!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  currency!: string;

  @TypeGraphQL.Field(_type => CountriesCountAggregate, {
    nullable: true
  })
  _count!: CountriesCountAggregate | null;

  @TypeGraphQL.Field(_type => CountriesMinAggregate, {
    nullable: true
  })
  _min!: CountriesMinAggregate | null;

  @TypeGraphQL.Field(_type => CountriesMaxAggregate, {
    nullable: true
  })
  _max!: CountriesMaxAggregate | null;
}
