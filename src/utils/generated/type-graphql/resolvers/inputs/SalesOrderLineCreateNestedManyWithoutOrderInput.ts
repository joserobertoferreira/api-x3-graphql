import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyOrderInputEnvelope } from "../inputs/SalesOrderLineCreateManyOrderInputEnvelope";
import { SalesOrderLineCreateOrConnectWithoutOrderInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutOrderInput";
import { SalesOrderLineCreateWithoutOrderInput } from "../inputs/SalesOrderLineCreateWithoutOrderInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateNestedManyWithoutOrderInput", {})
export class SalesOrderLineCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateWithoutOrderInput], {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderLineCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderLineWhereUniqueInput[] | undefined;
}
