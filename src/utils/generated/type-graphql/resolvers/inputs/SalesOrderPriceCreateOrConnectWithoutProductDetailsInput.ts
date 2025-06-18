import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateWithoutProductDetailsInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateOrConnectWithoutProductDetailsInput", {})
export class SalesOrderPriceCreateOrConnectWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutProductDetailsInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateWithoutProductDetailsInput;
}
