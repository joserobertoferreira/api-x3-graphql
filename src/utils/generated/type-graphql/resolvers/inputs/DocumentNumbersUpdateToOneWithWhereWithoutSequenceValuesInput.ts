import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersUpdateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersUpdateWithoutSequenceValuesInput";
import { DocumentNumbersWhereInput } from "../inputs/DocumentNumbersWhereInput";

@TypeGraphQL.InputType("DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput", {})
export class DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersUpdateWithoutSequenceValuesInput, {
    nullable: false
  })
  data!: DocumentNumbersUpdateWithoutSequenceValuesInput;
}
