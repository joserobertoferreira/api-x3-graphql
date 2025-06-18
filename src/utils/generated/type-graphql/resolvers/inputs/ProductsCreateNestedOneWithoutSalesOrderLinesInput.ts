import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateOrConnectWithoutSalesOrderLinesInput";
import { ProductsCreateWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateWithoutSalesOrderLinesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutSalesOrderLinesInput", {})
export class ProductsCreateNestedOneWithoutSalesOrderLinesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderLinesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutSalesOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutSalesOrderLinesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSalesOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
