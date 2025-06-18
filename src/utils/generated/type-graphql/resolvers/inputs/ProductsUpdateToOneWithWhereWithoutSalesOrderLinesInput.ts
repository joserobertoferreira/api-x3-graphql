import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsUpdateWithoutSalesOrderLinesInput } from "../inputs/ProductsUpdateWithoutSalesOrderLinesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput", {})
export class ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSalesOrderLinesInput, {
    nullable: false
  })
  data!: ProductsUpdateWithoutSalesOrderLinesInput;
}
