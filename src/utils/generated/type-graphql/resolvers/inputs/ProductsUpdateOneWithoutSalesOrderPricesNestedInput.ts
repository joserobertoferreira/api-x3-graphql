import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateOrConnectWithoutSalesOrderPricesInput";
import { ProductsCreateWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateWithoutSalesOrderPricesInput";
import { ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput } from "../inputs/ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput";
import { ProductsUpsertWithoutSalesOrderPricesInput } from "../inputs/ProductsUpsertWithoutSalesOrderPricesInput";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutSalesOrderPricesNestedInput", {})
export class ProductsUpdateOneWithoutSalesOrderPricesNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutSalesOrderPricesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutSalesOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutSalesOrderPricesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSalesOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutSalesOrderPricesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutSalesOrderPricesInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput, {
    nullable: true
  })
  update?: ProductsUpdateToOneWithWhereWithoutSalesOrderPricesInput | undefined;
}
