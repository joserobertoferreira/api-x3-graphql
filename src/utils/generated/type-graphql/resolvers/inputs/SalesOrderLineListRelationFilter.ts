import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineWhereInput } from "../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.InputType("SalesOrderLineListRelationFilter", {})
export class SalesOrderLineListRelationFilter {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  every?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  some?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  none?: SalesOrderLineWhereInput | undefined;
}
