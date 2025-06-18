import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateWithoutProductDetailsInput";
import { SalesOrderLineUpdateWithoutProductDetailsInput } from "../inputs/SalesOrderLineUpdateWithoutProductDetailsInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput", {})
export class SalesOrderLineUpsertWithWhereUniqueWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateWithoutProductDetailsInput, {
    nullable: false
  })
  update!: SalesOrderLineUpdateWithoutProductDetailsInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutProductDetailsInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateWithoutProductDetailsInput;
}
