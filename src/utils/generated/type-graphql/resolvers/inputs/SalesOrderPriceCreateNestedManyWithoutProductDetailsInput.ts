import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyProductDetailsInputEnvelope } from "../inputs/SalesOrderPriceCreateManyProductDetailsInputEnvelope";
import { SalesOrderPriceCreateOrConnectWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutProductDetailsInput";
import { SalesOrderPriceCreateWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateWithoutProductDetailsInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateNestedManyWithoutProductDetailsInput", {})
export class SalesOrderPriceCreateNestedManyWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateWithoutProductDetailsInput], {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateOrConnectWithoutProductDetailsInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutProductDetailsInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateManyProductDetailsInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderPriceCreateManyProductDetailsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderPriceWhereUniqueInput[] | undefined;
}
