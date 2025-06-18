import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyOrderInput } from "../inputs/SalesOrderPriceCreateManyOrderInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateManyOrderInputEnvelope", {})
export class SalesOrderPriceCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateManyOrderInput], {
    nullable: false
  })
  data!: SalesOrderPriceCreateManyOrderInput[];
}
