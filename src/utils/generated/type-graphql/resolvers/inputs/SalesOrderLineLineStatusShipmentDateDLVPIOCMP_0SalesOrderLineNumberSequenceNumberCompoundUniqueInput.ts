import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SalesOrderLineLineStatusShipmentDateDLVPIOCMP_0SalesOrderLineNumberSequenceNumberCompoundUniqueInput", {})
export class SalesOrderLineLineStatusShipmentDateDLVPIOCMP_0SalesOrderLineNumberSequenceNumberCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineStatus!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shipmentDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVPIOCMP_0!: number;

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
