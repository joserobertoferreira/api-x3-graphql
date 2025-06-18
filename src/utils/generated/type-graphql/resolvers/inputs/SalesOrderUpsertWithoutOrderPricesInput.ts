import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateWithoutOrderPricesInput } from "../inputs/SalesOrderCreateWithoutOrderPricesInput";
import { SalesOrderUpdateWithoutOrderPricesInput } from "../inputs/SalesOrderUpdateWithoutOrderPricesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";

@TypeGraphQL.InputType("SalesOrderUpsertWithoutOrderPricesInput", {})
export class SalesOrderUpsertWithoutOrderPricesInput {
  @TypeGraphQL.Field(_type => SalesOrderUpdateWithoutOrderPricesInput, {
    nullable: false
  })
  update!: SalesOrderUpdateWithoutOrderPricesInput;

  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderPricesInput, {
    nullable: false
  })
  create!: SalesOrderCreateWithoutOrderPricesInput;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;
}
