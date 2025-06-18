import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateOrConnectWithoutSalesOrderPricesInput";
import { ProductsCreateWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateWithoutSalesOrderPricesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutSalesOrderPricesInput", {})
export class ProductsCreateNestedOneWithoutSalesOrderPricesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderPricesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutSalesOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutSalesOrderPricesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSalesOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
