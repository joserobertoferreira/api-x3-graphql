import { GraphQLBigInt } from 'graphql-scalars';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Represents an analytical accounting line.' })
export class AnalyticalAccountingLine {
  @Field(() => GraphQLBigInt, { description: 'Unique line ID (ROWID).' })
  ROWID: bigint;

  @Field({ description: 'Document abbreviation.' })
  abbreviation: string;

  @Field(() => Int, { description: 'Document type.' })
  typ: number;

  @Field({ description: 'Document number.' })
  document: string;

  @Field(() => Int, { description: 'Line number in the document.' })
  lineNumber: number;

  @Field(() => Int, { description: 'Sequence number within the line.' })
  sequenceNumber: number;

  @Field({ nullable: true, description: 'Key complement, if applicable.' })
  keyComplement?: string;

  @Field(() => Int, { nullable: true, description: 'Sort value.' })
  sortValue?: number;

  @Field(() => String, { nullable: true, description: 'Ledger 1.' })
  ledger1?: string;

  @Field(() => String, { nullable: true, description: 'Ledger 2.' })
  ledger2?: string;

  @Field(() => String, { nullable: true, description: 'Ledger 3.' })
  ledger3?: string;

  @Field(() => String, { nullable: true, description: 'Ledger 4.' })
  ledger4?: string;

  @Field(() => String, { nullable: true, description: 'Ledger 5.' })
  ledger5?: string;

  @Field(() => String, { nullable: true, description: 'Ledger 6.' })
  ledger6?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 1.' })
  chartCode1?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 2.' })
  chartCode2?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 3.' })
  chartCode3?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 4.' })
  chartCode4?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 5.' })
  chartCode5?: string;

  @Field(() => String, { nullable: true, description: 'Chart of accounts code 6.' })
  chartCode6?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 1.' })
  generalAccounts1?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 2.' })
  generalAccounts2?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 3.' })
  generalAccounts3?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 4.' })
  generalAccounts4?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 5.' })
  generalAccounts5?: string;

  @Field(() => String, { nullable: true, description: 'General accounts code 6.' })
  generalAccounts6?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 1.' })
  dimensionType1?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 2.' })
  dimensionType2?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 3.' })
  dimensionType3?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 4.' })
  dimensionType4?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 5.' })
  dimensionType5?: string;

  @Field(() => String, { nullable: true, description: 'Dimension type 6.' })
  dimensionType6?: string;

  @Field({ nullable: true, description: 'Analytical dimension 1.' })
  dimension1?: string;

  @Field({ nullable: true, description: 'Analytical dimension 2.' })
  dimension2?: string;

  @Field({ nullable: true, description: 'Analytical dimension 3.' })
  dimension3?: string;

  @Field({ nullable: true, description: 'Analytical dimension 4.' })
  dimension4?: string;

  @Field({ nullable: true, description: 'Analytical dimension 5.' })
  dimension5?: string;

  @Field({ nullable: true, description: 'Analytical dimension 6.' })
  dimension6?: string;

  @Field(() => Date, { description: 'Creation date and time.' })
  createDatetime: Date;

  @Field(() => Date, { description: 'Last update date and time.' })
  updateDatetime: Date;
}
