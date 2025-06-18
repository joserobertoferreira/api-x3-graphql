import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyProductDetailsInputEnvelope } from "../inputs/SalesOrderLineCreateManyProductDetailsInputEnvelope";
import { SalesOrderLineCreateOrConnectWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateOrConnectWithoutProductDetailsInput";
import { SalesOrderLineCreateWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateWithoutProductDetailsInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateNestedManyWithoutProductDetailsInput", {})
export class SalesOrderLineCreateNestedManyWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateWithoutProductDetailsInput], {
    nullable: true
  })
  create?: SalesOrderLineCreateWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineCreateOrConnectWithoutProductDetailsInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderLineCreateOrConnectWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateManyProductDetailsInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderLineCreateManyProductDetailsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderLineWhereUniqueInput[] | undefined;
}
