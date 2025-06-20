import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersCreateOrConnectWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateOrConnectWithoutSequenceValuesInput";
import { DocumentNumbersCreateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateWithoutSequenceValuesInput";
import { DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput } from "../inputs/DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput";
import { DocumentNumbersUpsertWithoutSequenceValuesInput } from "../inputs/DocumentNumbersUpsertWithoutSequenceValuesInput";
import { DocumentNumbersWhereInput } from "../inputs/DocumentNumbersWhereInput";
import { DocumentNumbersWhereUniqueInput } from "../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.InputType("DocumentNumbersUpdateOneWithoutSequenceValuesNestedInput", {})
export class DocumentNumbersUpdateOneWithoutSequenceValuesNestedInput {
  @TypeGraphQL.Field(_type => DocumentNumbersCreateWithoutSequenceValuesInput, {
    nullable: true
  })
  create?: DocumentNumbersCreateWithoutSequenceValuesInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersCreateOrConnectWithoutSequenceValuesInput, {
    nullable: true
  })
  connectOrCreate?: DocumentNumbersCreateOrConnectWithoutSequenceValuesInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersUpsertWithoutSequenceValuesInput, {
    nullable: true
  })
  upsert?: DocumentNumbersUpsertWithoutSequenceValuesInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  disconnect?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  delete?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentNumbersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput, {
    nullable: true
  })
  update?: DocumentNumbersUpdateToOneWithWhereWithoutSequenceValuesInput | undefined;
}
