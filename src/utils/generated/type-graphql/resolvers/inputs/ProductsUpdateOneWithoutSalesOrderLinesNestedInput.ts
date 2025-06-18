import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateOrConnectWithoutSalesOrderLinesInput";
import { ProductsCreateWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateWithoutSalesOrderLinesInput";
import { ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput } from "../inputs/ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput";
import { ProductsUpsertWithoutSalesOrderLinesInput } from "../inputs/ProductsUpsertWithoutSalesOrderLinesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutSalesOrderLinesNestedInput", {})
export class ProductsUpdateOneWithoutSalesOrderLinesNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderLinesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutSalesOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutSalesOrderLinesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSalesOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutSalesOrderLinesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutSalesOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  disconnect?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  delete?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput, {
    nullable: true
  })
  update?: ProductsUpdateToOneWithWhereWithoutSalesOrderLinesInput | undefined;
}
