import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AddressEntityTypeEntityNumberCodeCompoundUniqueInput", {})
export class AddressEntityTypeEntityNumberCodeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  entityType!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entityNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;
}
