import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateWithoutProductDetailsInput";
import { SalesOrderPriceUpdateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceUpdateWithoutProductDetailsInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput", {})
export class SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutProductDetailsInput, {
    nullable: false
  })
  update!: SalesOrderPriceUpdateWithoutProductDetailsInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutProductDetailsInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateWithoutProductDetailsInput;
}
