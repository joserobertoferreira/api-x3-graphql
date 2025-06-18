import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateWithoutSalesOrderPricesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutSalesOrderPricesInput", {})
export class ProductsCreateOrConnectWithoutSalesOrderPricesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderPricesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSalesOrderPricesInput;
}
