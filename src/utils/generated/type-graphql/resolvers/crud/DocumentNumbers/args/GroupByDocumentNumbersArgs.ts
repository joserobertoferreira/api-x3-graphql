import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersOrderByWithAggregationInput } from "../../../inputs/DocumentNumbersOrderByWithAggregationInput";
import { DocumentNumbersScalarWhereWithAggregatesInput } from "../../../inputs/DocumentNumbersScalarWhereWithAggregatesInput";
import { DocumentNumbersWhereInput } from "../../../inputs/DocumentNumbersWhereInput";
import { DocumentNumbersScalarFieldEnum } from "../../../../enums/DocumentNumbersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentNumbersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DocumentNumbersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentNumbersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"UPDTICK_0" | "sequenceCode" | "lengthOf" | "definitionLevel" | "rtzLevel" | "type" | "numberOfComponents" | "componentType1" | "componentType2" | "componentType3" | "componentType4" | "componentType5" | "componentType6" | "componentType7" | "componentType8" | "componentType9" | "componentType10" | "componentLength1" | "componentLength2" | "componentLength3" | "componentLength4" | "componentLength5" | "componentLength6" | "componentLength7" | "componentLength8" | "componentLength9" | "componentLength10" | "constants1" | "constants2" | "constants3" | "constants4" | "constants5" | "constants6" | "constants7" | "constants8" | "constants9" | "constants10" | "chronologicalControl" | "resetToZero" | "sequence" | "tableName" | "tableAbbreviation" | "numerals" | "legislation" | "updateDate" | "createDate" | "updateUser" | "createUser" | "createDatetime" | "updateDatetime" | "singleID" | "ROWID">;

  @TypeGraphQL.Field(_type => DocumentNumbersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DocumentNumbersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
