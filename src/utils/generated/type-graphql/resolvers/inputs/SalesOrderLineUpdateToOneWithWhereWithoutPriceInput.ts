import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineUpdateWithoutPriceInput } from "../inputs/SalesOrderLineUpdateWithoutPriceInput";
import { SalesOrderLineWhereInput } from "../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateToOneWithWhereWithoutPriceInput", {})
export class SalesOrderLineUpdateToOneWithWhereWithoutPriceInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateWithoutPriceInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateWithoutPriceInput;
}
