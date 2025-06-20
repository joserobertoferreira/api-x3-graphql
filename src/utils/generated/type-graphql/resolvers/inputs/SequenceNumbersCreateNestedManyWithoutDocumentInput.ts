import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateManyDocumentInputEnvelope } from "../inputs/SequenceNumbersCreateManyDocumentInputEnvelope";
import { SequenceNumbersCreateOrConnectWithoutDocumentInput } from "../inputs/SequenceNumbersCreateOrConnectWithoutDocumentInput";
import { SequenceNumbersCreateWithoutDocumentInput } from "../inputs/SequenceNumbersCreateWithoutDocumentInput";
import { SequenceNumbersWhereUniqueInput } from "../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.InputType("SequenceNumbersCreateNestedManyWithoutDocumentInput", {})
export class SequenceNumbersCreateNestedManyWithoutDocumentInput {
  @TypeGraphQL.Field(_type => [SequenceNumbersCreateWithoutDocumentInput], {
    nullable: true
  })
  create?: SequenceNumbersCreateWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersCreateOrConnectWithoutDocumentInput], {
    nullable: true
  })
  connectOrCreate?: SequenceNumbersCreateOrConnectWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateManyDocumentInputEnvelope, {
    nullable: true
  })
  createMany?: SequenceNumbersCreateManyDocumentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereUniqueInput], {
    nullable: true
  })
  connect?: SequenceNumbersWhereUniqueInput[] | undefined;
}
