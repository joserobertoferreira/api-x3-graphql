import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyProductDetailsInputEnvelope } from "../inputs/SalesOrderPriceCreateManyProductDetailsInputEnvelope";
import { SalesOrderPriceCreateOrConnectWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutProductDetailsInput";
import { SalesOrderPriceCreateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateWithoutProductDetailsInput";
import { SalesOrderPriceScalarWhereInput } from "../inputs/SalesOrderPriceScalarWhereInput";
import { SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput } from "../inputs/SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput";
import { SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput } from "../inputs/SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput";
import { SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput } from "../inputs/SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateManyWithoutProductDetailsNestedInput", {})
export class SalesOrderPriceUpdateManyWithoutProductDetailsNestedInput {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateWithoutProductDetailsInput], {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateOrConnectWithoutProductDetailsInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput], {
    nullable: true
  })
  upsert?: SalesOrderPriceUpsertWithWhereUniqueWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateManyProductDetailsInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderPriceCreateManyProductDetailsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  set?: SalesOrderPriceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SalesOrderPriceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  delete?: SalesOrderPriceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderPriceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput], {
    nullable: true
  })
  update?: SalesOrderPriceUpdateWithWhereUniqueWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput], {
    nullable: true
  })
  updateMany?: SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SalesOrderPriceScalarWhereInput[] | undefined;
}
