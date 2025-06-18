import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateOrConnectWithoutPriceInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutPriceInput";
import { SalesOrderLineCreateWithoutPriceInput } from "../inputs/SalesOrderLineCreateWithoutPriceInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateNestedOneWithoutPriceInput", {})
export class SalesOrderLineCreateNestedOneWithoutPriceInput {
  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutPriceInput, {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutPriceInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateOrConnectWithoutPriceInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutPriceInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderLineWhereUniqueInput | undefined;
}
