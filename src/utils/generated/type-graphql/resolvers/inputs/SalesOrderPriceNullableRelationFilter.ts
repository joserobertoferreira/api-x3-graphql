import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceWhereInput } from "../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.InputType("SalesOrderPriceNullableRelationFilter", {})
export class SalesOrderPriceNullableRelationFilter {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  is?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  isNot?: SalesOrderPriceWhereInput | undefined;
}
