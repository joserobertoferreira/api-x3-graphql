import { Field, InputType, Int } from 'type-graphql';

@InputType({ description: 'Data to create a new analytical accounting line.' })
export class CreateAnalyticalAccountingLineInput {
  @Field({ description: 'Document abbreviation.' })
  abbreviation: string;

  @Field(() => Int, { description: 'Document type.' })
  typ: number;

  @Field({ description: 'Document number.' })
  document: string;

  @Field(() => Int, { description: 'Line number in the document.' })
  lineNumber: number;

  @Field(() => Int, { defaultValue: 0, description: 'Sequence number. Default: 0.' })
  sequenceNumber: number;

  @Field({ defaultValue: '', description: 'Key complement. Default: empty string.' })
  keyComplement: string;

  @Field(() => Int, { defaultValue: 0, description: 'Sort value. Default: 0.' })
  sortValue: number;

  @Field(() => String, { defaultValue: '', description: 'Ledger 1.' })
  ledger1: string;

  @Field(() => String, { defaultValue: '', description: 'Ledger 2.' })
  ledger2: string;

  @Field(() => String, { defaultValue: '', description: 'Ledger 3.' })
  ledger3: string;

  @Field(() => String, { defaultValue: '', description: 'Ledger 4.' })
  ledger4: string;

  @Field(() => String, { defaultValue: '', description: 'Ledger 5.' })
  ledger5: string;

  @Field(() => String, { defaultValue: '', description: 'Ledger 6.' })
  ledger6: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 1.' })
  chartCode1: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 2.' })
  chartCode2: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 3.' })
  chartCode3: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 4.' })
  chartCode4: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 5.' })
  chartCode5: string;

  @Field(() => String, { defaultValue: '', description: 'Chart of accounts code 6.' })
  chartCode6: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 1.' })
  dimensionType1: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 2.' })
  dimensionType2: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 3.' })
  dimensionType3: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 4.' })
  dimensionType4: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 5.' })
  dimensionType5: string;

  @Field(() => String, { defaultValue: '', description: 'Dimension type 6.' })
  dimensionType6: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 1.' })
  dimension1: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 2.' })
  dimension2: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 3.' })
  dimension3: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 4.' })
  dimension4: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 5.' })
  dimension5: string;

  @Field({ defaultValue: '', description: 'Analytical dimension 6.' })
  dimension6: string;
}
