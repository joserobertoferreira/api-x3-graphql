import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateWithoutSalesOrderLinesInput";
import { ProductsUpdateWithoutSalesOrderLinesInput } from "../inputs/ProductsUpdateWithoutSalesOrderLinesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutSalesOrderLinesInput", {})
export class ProductsUpsertWithoutSalesOrderLinesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSalesOrderLinesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutSalesOrderLinesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderLinesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSalesOrderLinesInput;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;
}
