import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersOrderByWithAggregationInput } from "../../../inputs/SequenceNumbersOrderByWithAggregationInput";
import { SequenceNumbersScalarWhereWithAggregatesInput } from "../../../inputs/SequenceNumbersScalarWhereWithAggregatesInput";
import { SequenceNumbersWhereInput } from "../../../inputs/SequenceNumbersWhereInput";
import { SequenceNumbersScalarFieldEnum } from "../../../../enums/SequenceNumbersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  where?: SequenceNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SequenceNumbersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"UPDTICK_0" | "sequenceNumber" | "siteOrCompany" | "period" | "complement" | "sequenceValue" | "CREUSR_0" | "UPDUSR_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "ROWID">;

  @TypeGraphQL.Field(_type => SequenceNumbersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SequenceNumbersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
