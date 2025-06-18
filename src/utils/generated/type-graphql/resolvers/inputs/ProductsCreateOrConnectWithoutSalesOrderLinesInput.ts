import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateWithoutSalesOrderLinesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutSalesOrderLinesInput", {})
export class ProductsCreateOrConnectWithoutSalesOrderLinesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderLinesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSalesOrderLinesInput;
}
