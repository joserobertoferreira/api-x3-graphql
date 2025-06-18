import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateWithoutPriceInput } from "../inputs/SalesOrderLineCreateWithoutPriceInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateOrConnectWithoutPriceInput", {})
export class SalesOrderLineCreateOrConnectWithoutPriceInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutPriceInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateWithoutPriceInput;
}
