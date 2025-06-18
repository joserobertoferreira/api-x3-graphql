import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineUpdateWithoutProductDetailsInput } from "../inputs/SalesOrderLineUpdateWithoutProductDetailsInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput", {})
export class SalesOrderLineUpdateWithWhereUniqueWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateWithoutProductDetailsInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateWithoutProductDetailsInput;
}
