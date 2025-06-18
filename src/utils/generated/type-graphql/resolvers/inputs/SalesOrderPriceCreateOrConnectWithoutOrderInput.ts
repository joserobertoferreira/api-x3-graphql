import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateWithoutOrderInput } from "../inputs/SalesOrderPriceCreateWithoutOrderInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateOrConnectWithoutOrderInput", {})
export class SalesOrderPriceCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutOrderInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateWithoutOrderInput;
}
