import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateWithoutDocumentInput } from "../inputs/SequenceNumbersCreateWithoutDocumentInput";
import { SequenceNumbersWhereUniqueInput } from "../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.InputType("SequenceNumbersCreateOrConnectWithoutDocumentInput", {})
export class SequenceNumbersCreateOrConnectWithoutDocumentInput {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: SequenceNumbersCreateWithoutDocumentInput;
}
