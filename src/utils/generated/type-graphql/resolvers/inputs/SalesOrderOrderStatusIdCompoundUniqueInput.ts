import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SalesOrderOrderStatusIdCompoundUniqueInput", {})
export class SalesOrderOrderStatusIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  orderStatus!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;
}
