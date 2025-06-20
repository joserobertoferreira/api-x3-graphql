import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateWithoutDocumentInput } from "../inputs/SequenceNumbersCreateWithoutDocumentInput";
import { SequenceNumbersUpdateWithoutDocumentInput } from "../inputs/SequenceNumbersUpdateWithoutDocumentInput";
import { SequenceNumbersWhereUniqueInput } from "../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.InputType("SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput", {})
export class SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SequenceNumbersUpdateWithoutDocumentInput, {
    nullable: false
  })
  update!: SequenceNumbersUpdateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: SequenceNumbersCreateWithoutDocumentInput;
}
