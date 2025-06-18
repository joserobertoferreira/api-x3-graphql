import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceUpdateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceUpdateWithoutProductDetailsInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput", {})
export class SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutProductDetailsInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateWithoutProductDetailsInput;
}
