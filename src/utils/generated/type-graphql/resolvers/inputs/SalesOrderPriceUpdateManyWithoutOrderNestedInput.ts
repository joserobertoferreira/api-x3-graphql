import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyOrderInputEnvelope } from "../inputs/SalesOrderPriceCreateManyOrderInputEnvelope";
import { SalesOrderPriceCreateOrConnectWithoutOrderInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutOrderInput";
import { SalesOrderPriceCreateWithoutOrderInput } from "../inputs/SalesOrderPriceCreateWithoutOrderInput";
import { SalesOrderPriceScalarWhereInput } from "../inputs/SalesOrderPriceScalarWhereInput";
import { SalesOrderPriceUpdateManyWithWhereWithoutOrderInput } from "../inputs/SalesOrderPriceUpdateManyWithWhereWithoutOrderInput";
import { SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput";
import { SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateManyWithoutOrderNestedInput", {})
export class SalesOrderPriceUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateWithoutOrderInput], {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: SalesOrderPriceUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderPriceCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: SalesOrderPriceUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: SalesOrderPriceUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SalesOrderPriceScalarWhereInput[] | undefined;
}
