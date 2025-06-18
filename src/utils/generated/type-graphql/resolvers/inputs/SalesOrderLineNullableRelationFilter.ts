import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineWhereInput } from "../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.InputType("SalesOrderLineNullableRelationFilter", {})
export class SalesOrderLineNullableRelationFilter {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  is?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  isNot?: SalesOrderLineWhereInput | undefined;
}
