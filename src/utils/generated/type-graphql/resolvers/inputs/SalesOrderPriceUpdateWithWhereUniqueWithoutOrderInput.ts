import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceUpdateWithoutOrderInput } from "../inputs/SalesOrderPriceUpdateWithoutOrderInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput", {})
export class SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateWithoutOrderInput;
}
