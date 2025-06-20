import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersCreateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateWithoutSequenceValuesInput";
import { DocumentNumbersWhereUniqueInput } from "../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.InputType("DocumentNumbersCreateOrConnectWithoutSequenceValuesInput", {})
export class DocumentNumbersCreateOrConnectWithoutSequenceValuesInput {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentNumbersCreateWithoutSequenceValuesInput, {
    nullable: false
  })
  create!: DocumentNumbersCreateWithoutSequenceValuesInput;
}
