import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateManyDocumentInputEnvelope } from "../inputs/SequenceNumbersCreateManyDocumentInputEnvelope";
import { SequenceNumbersCreateOrConnectWithoutDocumentInput } from "../inputs/SequenceNumbersCreateOrConnectWithoutDocumentInput";
import { SequenceNumbersCreateWithoutDocumentInput } from "../inputs/SequenceNumbersCreateWithoutDocumentInput";
import { SequenceNumbersScalarWhereInput } from "../inputs/SequenceNumbersScalarWhereInput";
import { SequenceNumbersUpdateManyWithWhereWithoutDocumentInput } from "../inputs/SequenceNumbersUpdateManyWithWhereWithoutDocumentInput";
import { SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput } from "../inputs/SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput";
import { SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput } from "../inputs/SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput";
import { SequenceNumbersWhereUniqueInput } from "../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.InputType("SequenceNumbersUpdateManyWithoutDocumentNestedInput", {})
export class SequenceNumbersUpdateManyWithoutDocumentNestedInput {
  @TypeGraphQL.Field(_type => [SequenceNumbersCreateWithoutDocumentInput], {
    nullable: true
  })
  create?: SequenceNumbersCreateWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersCreateOrConnectWithoutDocumentInput], {
    nullable: true
  })
  connectOrCreate?: SequenceNumbersCreateOrConnectWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput], {
    nullable: true
  })
  upsert?: SequenceNumbersUpsertWithWhereUniqueWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateManyDocumentInputEnvelope, {
    nullable: true
  })
  createMany?: SequenceNumbersCreateManyDocumentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereUniqueInput], {
    nullable: true
  })
  set?: SequenceNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SequenceNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereUniqueInput], {
    nullable: true
  })
  delete?: SequenceNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereUniqueInput], {
    nullable: true
  })
  connect?: SequenceNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput], {
    nullable: true
  })
  update?: SequenceNumbersUpdateWithWhereUniqueWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersUpdateManyWithWhereWithoutDocumentInput], {
    nullable: true
  })
  updateMany?: SequenceNumbersUpdateManyWithWhereWithoutDocumentInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SequenceNumbersScalarWhereInput[] | undefined;
}
