import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { DocumentNumbersNullableRelationFilter } from "../inputs/DocumentNumbersNullableRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput } from "../inputs/SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput";
import { SequenceNumbersWhereInput } from "../inputs/SequenceNumbersWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SequenceNumbersWhereUniqueInput", {})
export class SequenceNumbersWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput, {
    nullable: true
  })
  sequenceNumber_siteOrCompany_period_complement?: SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereInput], {
    nullable: true
  })
  AND?: SequenceNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereInput], {
    nullable: true
  })
  OR?: SequenceNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersWhereInput], {
    nullable: true
  })
  NOT?: SequenceNumbersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UPDTICK_0?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sequenceNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  siteOrCompany?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  period?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  complement?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  sequenceValue?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  updateUser?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createUser?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createDatetime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateDatetime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  singleID?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersNullableRelationFilter, {
    nullable: true
  })
  document?: DocumentNumbersNullableRelationFilter | undefined;
}
