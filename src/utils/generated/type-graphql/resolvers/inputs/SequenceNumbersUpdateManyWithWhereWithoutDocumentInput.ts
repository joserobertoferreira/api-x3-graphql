import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersScalarWhereInput } from "../inputs/SequenceNumbersScalarWhereInput";
import { SequenceNumbersUpdateManyMutationInput } from "../inputs/SequenceNumbersUpdateManyMutationInput";

@TypeGraphQL.InputType("SequenceNumbersUpdateManyWithWhereWithoutDocumentInput", {})
export class SequenceNumbersUpdateManyWithWhereWithoutDocumentInput {
  @TypeGraphQL.Field(_type => SequenceNumbersScalarWhereInput, {
    nullable: false
  })
  where!: SequenceNumbersScalarWhereInput;

  @TypeGraphQL.Field(_type => SequenceNumbersUpdateManyMutationInput, {
    nullable: false
  })
  data!: SequenceNumbersUpdateManyMutationInput;
}
