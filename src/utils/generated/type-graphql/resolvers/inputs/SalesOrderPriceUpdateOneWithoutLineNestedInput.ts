import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateOrConnectWithoutLineInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutLineInput";
import { SalesOrderPriceCreateWithoutLineInput } from "../inputs/SalesOrderPriceCreateWithoutLineInput";
import { SalesOrderPriceUpdateToOneWithWhereWithoutLineInput } from "../inputs/SalesOrderPriceUpdateToOneWithWhereWithoutLineInput";
import { SalesOrderPriceUpsertWithoutLineInput } from "../inputs/SalesOrderPriceUpsertWithoutLineInput";
import { SalesOrderPriceWhereInput } from "../inputs/SalesOrderPriceWhereInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateOneWithoutLineNestedInput", {})
export class SalesOrderPriceUpdateOneWithoutLineNestedInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceCreateWithoutLineInput, {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutLineInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateOrConnectWithoutLineInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutLineInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpsertWithoutLineInput, {
    nullable: true
  })
  upsert?: SalesOrderPriceUpsertWithoutLineInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  disconnect?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  delete?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderPriceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateToOneWithWhereWithoutLineInput, {
    nullable: true
  })
  update?: SalesOrderPriceUpdateToOneWithWhereWithoutLineInput | undefined;
}
