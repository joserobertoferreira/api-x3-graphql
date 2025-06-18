import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";

@TypeGraphQL.InputType("SalesOrderNullableRelationFilter", {})
export class SalesOrderNullableRelationFilter {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  is?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  isNot?: SalesOrderWhereInput | undefined;
}
