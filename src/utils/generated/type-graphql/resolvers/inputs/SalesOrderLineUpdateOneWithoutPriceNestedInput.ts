import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateOrConnectWithoutPriceInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutPriceInput";
import { SalesOrderLineCreateWithoutPriceInput } from "../inputs/SalesOrderLineCreateWithoutPriceInput";
import { SalesOrderLineUpdateToOneWithWhereWithoutPriceInput } from "../inputs/SalesOrderLineUpdateToOneWithWhereWithoutPriceInput";
import { SalesOrderLineUpsertWithoutPriceInput } from "../inputs/SalesOrderLineUpsertWithoutPriceInput";
import { SalesOrderLineWhereInput } from "../inputs/SalesOrderLineWhereInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateOneWithoutPriceNestedInput", {})
export class SalesOrderLineUpdateOneWithoutPriceNestedInput {
  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutPriceInput, {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutPriceInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateOrConnectWithoutPriceInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutPriceInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineUpsertWithoutPriceInput, {
    nullable: true
  })
  upsert?: SalesOrderLineUpsertWithoutPriceInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  disconnect?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  delete?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderLineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateToOneWithWhereWithoutPriceInput, {
    nullable: true
  })
  update?: SalesOrderLineUpdateToOneWithWhereWithoutPriceInput | undefined;
}
