import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SalesOrderLineSalesOrderLineNumberSequenceNumberCompoundUniqueInput", {})
export class SalesOrderLineSalesOrderLineNumberSequenceNumberCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesOrder!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sequenceNumber!: number;
}
