import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateWithoutOrderInput } from "../inputs/SalesOrderPriceCreateWithoutOrderInput";
import { SalesOrderPriceUpdateWithoutOrderInput } from "../inputs/SalesOrderPriceUpdateWithoutOrderInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput", {})
export class SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: SalesOrderPriceUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutOrderInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateWithoutOrderInput;
}
