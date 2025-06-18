import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceWhereInput } from "../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.InputType("SalesOrderPriceListRelationFilter", {})
export class SalesOrderPriceListRelationFilter {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  every?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  some?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  none?: SalesOrderPriceWhereInput | undefined;
}
