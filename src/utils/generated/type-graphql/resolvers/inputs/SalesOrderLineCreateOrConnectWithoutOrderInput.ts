import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateWithoutOrderInput } from "../inputs/SalesOrderLineCreateWithoutOrderInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineCreateOrConnectWithoutOrderInput", {})
export class SalesOrderLineCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateWithoutOrderInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateWithoutOrderInput;
}
