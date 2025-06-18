import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceScalarWhereInput } from "../inputs/SalesOrderPriceScalarWhereInput";
import { SalesOrderPriceUpdateManyMutationInput } from "../inputs/SalesOrderPriceUpdateManyMutationInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput", {})
export class SalesOrderPriceUpdateManyWithWhereWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderPriceScalarWhereInput, {
    nullable: false
  })
  where!: SalesOrderPriceScalarWhereInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateManyMutationInput;
}
