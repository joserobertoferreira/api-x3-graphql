import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyOrderInputEnvelope } from "../inputs/SalesOrderLineCreateManyOrderInputEnvelope";
import { SalesOrderLineCreateOrConnectWithoutOrderInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutOrderInput";
import { SalesOrderLineCreateWithoutOrderInput } from "../inputs/SalesOrderLineCreateWithoutOrderInput";
import { SalesOrderLineScalarWhereInput } from "../inputs/SalesOrderLineScalarWhereInput";
import { SalesOrderLineUpdateManyWithWhereWithoutOrderInput } from "../inputs/SalesOrderLineUpdateManyWithWhereWithoutOrderInput";
import { SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput";
import { SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateManyWithoutOrderNestedInput", {})
export class SalesOrderLineUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateWithoutOrderInput], {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderLineCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: SalesOrderLineUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SalesOrderLineScalarWhereInput[] | undefined;
}
