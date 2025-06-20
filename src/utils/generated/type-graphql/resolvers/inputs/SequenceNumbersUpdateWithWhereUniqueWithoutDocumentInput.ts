import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersUpdateWithoutDocumentInput } from "../inputs/SequenceNumbersUpdateWithoutDocumentInput";
import { SequenceNumbersWhereUniqueInput } from "../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.InputType("SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput", {})
export class SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SequenceNumbersUpdateWithoutDocumentInput, {
    nullable: false
  })
  data!: SequenceNumbersUpdateWithoutDocumentInput;
}
