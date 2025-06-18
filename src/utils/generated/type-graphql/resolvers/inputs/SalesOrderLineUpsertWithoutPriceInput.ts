import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateWithoutPriceInput } from "../inputs/SalesOrderLineCreateWithoutPriceInput";
import { SalesOrderLineUpdateWithoutPriceInput } from "../inputs/SalesOrderLineUpdateWithoutPriceInput";
import { SalesOrderLineWhereInput } from "../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.InputType("SalesOrderLineUpsertWithoutPriceInput", {})
export class SalesOrderLineUpsertWithoutPriceInput {
  @TypeGraphQL.Field(_type => SalesOrderLineUpdateWithoutPriceInput, {
    nullable: false
  })
  update!: SalesOrderLineUpdateWithoutPriceInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutPriceInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateWithoutPriceInput;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;
}
