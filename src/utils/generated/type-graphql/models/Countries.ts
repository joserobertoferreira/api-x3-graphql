import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Countries", {})
export class Countries {
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
}
