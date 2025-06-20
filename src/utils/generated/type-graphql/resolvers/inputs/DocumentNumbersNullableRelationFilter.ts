import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersWhereInput } from "../inputs/DocumentNumbersWhereInput";

@TypeGraphQL.InputType("DocumentNumbersNullableRelationFilter", {})
export class DocumentNumbersNullableRelationFilter {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  is?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  isNot?: DocumentNumbersWhereInput | undefined;
}
