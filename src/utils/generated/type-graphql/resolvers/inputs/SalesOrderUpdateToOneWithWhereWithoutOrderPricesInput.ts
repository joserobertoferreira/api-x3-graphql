import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderUpdateWithoutOrderPricesInput } from "../inputs/SalesOrderUpdateWithoutOrderPricesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";

@TypeGraphQL.InputType("SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput", {})
export class SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderUpdateWithoutOrderPricesInput, {
    nullable: false
  })
  data!: SalesOrderUpdateWithoutOrderPricesInput;
}
