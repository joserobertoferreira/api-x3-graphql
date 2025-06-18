import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersAvgOrderByAggregateInput } from "../inputs/SequenceNumbersAvgOrderByAggregateInput";
import { SequenceNumbersCountOrderByAggregateInput } from "../inputs/SequenceNumbersCountOrderByAggregateInput";
import { SequenceNumbersMaxOrderByAggregateInput } from "../inputs/SequenceNumbersMaxOrderByAggregateInput";
import { SequenceNumbersMinOrderByAggregateInput } from "../inputs/SequenceNumbersMinOrderByAggregateInput";
import { SequenceNumbersSumOrderByAggregateInput } from "../inputs/SequenceNumbersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SequenceNumbersOrderByWithAggregationInput", {})
export class SequenceNumbersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UPDTICK_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sequenceNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  siteOrCompany?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  period?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  complement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sequenceValue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CREUSR_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UPDUSR_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CREDATTIM_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UPDDATTIM_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  AUUID_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ROWID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SequenceNumbersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SequenceNumbersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SequenceNumbersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SequenceNumbersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SequenceNumbersSumOrderByAggregateInput | undefined;
}
