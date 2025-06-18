import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyOrderInputEnvelope } from "../inputs/SalesOrderPriceCreateManyOrderInputEnvelope";
import { SalesOrderPriceCreateOrConnectWithoutOrderInput } from "../inputs/SalesOrderPriceCreateOrConnectWithoutOrderInput";
import { SalesOrderPriceCreateWithoutOrderInput } from "../inputs/SalesOrderPriceCreateWithoutOrderInput";
import { SalesOrderPriceWhereUniqueInput } from "../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateNestedManyWithoutOrderInput", {})
export class SalesOrderPriceCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateWithoutOrderInput], {
    nullable: true
  })
  create?: SalesOrderPriceCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: SalesOrderPriceCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: SalesOrderPriceCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceWhereUniqueInput], {
    nullable: true
  })
  connect?: SalesOrderPriceWhereUniqueInput[] | undefined;
}
