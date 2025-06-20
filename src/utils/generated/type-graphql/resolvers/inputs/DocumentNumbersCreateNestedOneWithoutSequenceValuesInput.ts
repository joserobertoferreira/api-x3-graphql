import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersCreateOrConnectWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateOrConnectWithoutSequenceValuesInput";
import { DocumentNumbersCreateWithoutSequenceValuesInput } from "../inputs/DocumentNumbersCreateWithoutSequenceValuesInput";
import { DocumentNumbersWhereUniqueInput } from "../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.InputType("DocumentNumbersCreateNestedOneWithoutSequenceValuesInput", {})
export class DocumentNumbersCreateNestedOneWithoutSequenceValuesInput {
  @TypeGraphQL.Field(_type => DocumentNumbersCreateWithoutSequenceValuesInput, {
    nullable: true
  })
  create?: DocumentNumbersCreateWithoutSequenceValuesInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersCreateOrConnectWithoutSequenceValuesInput, {
    nullable: true
  })
  connectOrCreate?: DocumentNumbersCreateOrConnectWithoutSequenceValuesInput | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentNumbersWhereUniqueInput | undefined;
}
