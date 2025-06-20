import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateManyDocumentInput } from "../inputs/SequenceNumbersCreateManyDocumentInput";

@TypeGraphQL.InputType("SequenceNumbersCreateManyDocumentInputEnvelope", {})
export class SequenceNumbersCreateManyDocumentInputEnvelope {
  @TypeGraphQL.Field(_type => [SequenceNumbersCreateManyDocumentInput], {
    nullable: false
  })
  data!: SequenceNumbersCreateManyDocumentInput[];
}
