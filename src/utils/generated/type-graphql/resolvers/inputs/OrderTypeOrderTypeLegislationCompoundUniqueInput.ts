import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OrderTypeOrderTypeLegislationCompoundUniqueInput", {})
export class OrderTypeOrderTypeLegislationCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legislation!: string;
}
