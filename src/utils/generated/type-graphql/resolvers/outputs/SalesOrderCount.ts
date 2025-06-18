import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCountOrderLinesArgs } from "./args/SalesOrderCountOrderLinesArgs";
import { SalesOrderCountOrderPricesArgs } from "./args/SalesOrderCountOrderPricesArgs";

@TypeGraphQL.ObjectType("SalesOrderCount", {})
export class SalesOrderCount {
  orderLines!: number;
  orderPrices!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "orderLines",
    nullable: false
  })
  getOrderLines(@TypeGraphQL.Root() root: SalesOrderCount, @TypeGraphQL.Args() args: SalesOrderCountOrderLinesArgs): number {
    return root.orderLines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "orderPrices",
    nullable: false
  })
  getOrderPrices(@TypeGraphQL.Root() root: SalesOrderCount, @TypeGraphQL.Args() args: SalesOrderCountOrderPricesArgs): number {
    return root.orderPrices;
  }
}
