import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceCreateManyProductDetailsInput } from "../inputs/SalesOrderPriceCreateManyProductDetailsInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateManyProductDetailsInputEnvelope", {})
export class SalesOrderPriceCreateManyProductDetailsInputEnvelope {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateManyProductDetailsInput], {
    nullable: false
  })
  data!: SalesOrderPriceCreateManyProductDetailsInput[];
}
