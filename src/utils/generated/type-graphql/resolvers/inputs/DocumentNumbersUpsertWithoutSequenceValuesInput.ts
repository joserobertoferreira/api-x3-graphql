import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersCreateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateWithoutSequenceValuesInput";
import { DocumentNumbersUpdateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersUpdateWithoutSequenceValuesInput";
import { DocumentNumbersWhereInput } from "../inputs/DocumentNumbersWhereInput";

@TypeGraphQL.InputType("DocumentNumbersUpsertWithoutSequenceValuesInput", {})
export class DocumentNumbersUpsertWithoutSequenceValuesInput {
  @TypeGraphQL.Field(_type => DocumentNumbersUpdateWithoutSequenceValuesInput, {
    nullable: false
  })
  update!: DocumentNumbersUpdateWithoutSequenceValuesInput;

  @TypeGraphQL.Field(_type => DocumentNumbersCreateWithoutSequenceValuesInput, {
    nullable: false
  })
  create!: DocumentNumbersCreateWithoutSequenceValuesInput;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;
}
