import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceUpdateWithoutLineInput } from "../inputs/SalesOrderPriceUpdateWithoutLineInput";
import { SalesOrderPriceWhereInput } from "../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateToOneWithWhereWithoutLineInput", {})
export class SalesOrderPriceUpdateToOneWithWhereWithoutLineInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutLineInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateWithoutLineInput;
}
