import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateWithoutProductDetailsInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateOrConnectWithoutProductDetailsInput", {})
export class SalesOrderLineCreateOrConnectWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutProductDetailsInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateWithoutProductDetailsInput;
}
