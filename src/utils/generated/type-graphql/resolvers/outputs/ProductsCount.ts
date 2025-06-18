import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCountSalesOrderLinesArgs } from "./args/ProductsCountSalesOrderLinesArgs";
import { ProductsCountSalesOrderPricesArgs } from "./args/ProductsCountSalesOrderPricesArgs";

@TypeGraphQL.ObjectType("ProductsCount", {})
export class ProductsCount {
  salesOrderLines!: number;
  salesOrderPrices!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "salesOrderLines",
    nullable: false
  })
  getSalesOrderLines(@TypeGraphQL.Root() root: ProductsCount, @TypeGraphQL.Args() args: ProductsCountSalesOrderLinesArgs): number {
    return root.salesOrderLines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "salesOrderPrices",
    nullable: false
  })
  getSalesOrderPrices(@TypeGraphQL.Root() root: ProductsCount, @TypeGraphQL.Args() args: ProductsCountSalesOrderPricesArgs): number {
    return root.salesOrderPrices;
  }
}
