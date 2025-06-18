import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateWithoutLineInput } from "../inputs/SalesOrderPriceCreateWithoutLineInput";
import { SalesOrderPriceUpdateWithoutLineInput } from "../inputs/SalesOrderPriceUpdateWithoutLineInput";
import { SalesOrderPriceWhereInput } from "../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.InputType("SalesOrderPriceUpsertWithoutLineInput", {})
export class SalesOrderPriceUpsertWithoutLineInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateWithoutLineInput, {
    nullable: false
  })
  update!: SalesOrderPriceUpdateWithoutLineInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutLineInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateWithoutLineInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;
}
