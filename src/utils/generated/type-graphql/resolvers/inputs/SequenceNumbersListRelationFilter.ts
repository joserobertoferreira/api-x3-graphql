import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersWhereInput } from "../inputs/SequenceNumbersWhereInput";

@TypeGraphQL.InputType("SequenceNumbersListRelationFilter", {})
export class SequenceNumbersListRelationFilter {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  every?: SequenceNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  some?: SequenceNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  none?: SequenceNumbersWhereInput | undefined;
}
