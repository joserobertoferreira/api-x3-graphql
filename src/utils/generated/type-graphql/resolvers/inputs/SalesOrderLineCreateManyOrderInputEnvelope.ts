import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyOrderInput } from "../inputs/SalesOrderLineCreateManyOrderInput";

@TypeGraphQL.InputType("SalesOrderLineCreateManyOrderInputEnvelope", {})
export class SalesOrderLineCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateManyOrderInput], {
    nullable: false
  })
  data!: SalesOrderLineCreateManyOrderInput[];
}
