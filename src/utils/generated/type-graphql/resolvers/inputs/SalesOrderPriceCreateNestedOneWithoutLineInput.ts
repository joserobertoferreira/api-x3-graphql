import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateOrConnectWithoutLineInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutLineInput";
import { SalesOrderPriceCreateWithoutLineInput } from "../inputs/SalesOrderPriceCreateWithoutLineInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateNestedOneWithoutLineInput", {})
export class SalesOrderPriceCreateNestedOneWithoutLineInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutLineInput, {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutLineInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateOrConnectWithoutLineInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutLineInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderPriceWhereUniqueInput | undefined;
}
