import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyProductDetailsInputEnvelope } from "../inputs/SalesOrderLineCreateManyProductDetailsInputEnvelope";
import { SalesOrderLineCreateOrConnectWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutProductDetailsInput";
import { SalesOrderLineCreateWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateWithoutProductDetailsInput";
import { SalesOrderLineScalarWhereInput } from "../inputs/SalesOrderLineScalarWhereInput";
import { SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput } from "../inputs/SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput";
import { SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput } from "../inputs/SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput";
import { SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput } from "../inputs/SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateManyWithoutProductDetailsNestedInput", {})
export class SalesOrderLineUpdateManyWithoutProductDetailsNestedInput {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateWithoutProductDetailsInput], {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineCreateOrConnectWithoutProductDetailsInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput], {
    nullable: true
  })
  upsert?: SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateManyProductDetailsInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderLineCreateManyProductDetailsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  set?: SalesOrderLineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SalesOrderLineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  delete?: SalesOrderLineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderLineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput], {
    nullable: true
  })
  update?: SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput], {
    nullable: true
  })
  updateMany?: SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SalesOrderLineScalarWhereInput[] | undefined;
}
