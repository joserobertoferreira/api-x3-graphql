import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateManyProductDetailsInput } from "../inputs/SalesOrderLineCreateManyProductDetailsInput";

@TypeGraphQL.InputType("SalesOrderLineCreateManyProductDetailsInputEnvelope", {})
export class SalesOrderLineCreateManyProductDetailsInputEnvelope {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateManyProductDetailsInput], {
    nullable: false
  })
  data!: SalesOrderLineCreateManyProductDetailsInput[];
}
