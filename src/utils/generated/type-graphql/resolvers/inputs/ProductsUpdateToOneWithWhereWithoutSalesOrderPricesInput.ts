import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsUpdateWithoutSalesOrderPricesInput } from "../inputs/ProductsUpdateWithoutSalesOrderPricesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput", {})
export class ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSalesOrderPricesInput, {
    nullable: false
  })
  data!: ProductsUpdateWithoutSalesOrderPricesInput;
}
