import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SequenceNumbersScalarWhereWithAggregatesInput", {})
export class SequenceNumbersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SequenceNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SequenceNumbersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SequenceNumbersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SequenceNumbersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  UPDTICK_0?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sequenceNumber?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  siteOrCompany?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  period?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  complement?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  sequenceValue?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CREUSR_0?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  UPDUSR_0?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CREDATTIM_0?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  UPDDATTIM_0?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  AUUID_0?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  ROWID?: BigIntWithAggregatesFilter | undefined;
}
