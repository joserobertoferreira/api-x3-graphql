import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateWithoutSalesOrderPricesInput";
import { ProductsUpdateWithoutSalesOrderPricesInput } from "../inputs/ProductsUpdateWithoutSalesOrderPricesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutSalesOrderPricesInput", {})
export class ProductsUpsertWithoutSalesOrderPricesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSalesOrderPricesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutSalesOrderPricesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderPricesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSalesOrderPricesInput;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;
}
