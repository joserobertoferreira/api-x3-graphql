import { Field, InputType } from 'type-graphql';
import { IntFilter } from '../utils/IntFilter';
import { StringFilter } from '../utils/StringFilter';

@InputType({})
export class CompanyWhereInput {
  @Field(() => [CompanyWhereInput], { nullable: true })
  AND?: CompanyWhereInput[] | undefined;

  @Field(() => [CompanyWhereInput], { nullable: true })
  OR?: CompanyWhereInput[] | undefined;

  @Field(() => [CompanyWhereInput], { nullable: true })
  NOT?: CompanyWhereInput[] | undefined;

  @Field(() => StringFilter, { nullable: true })
  company?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  standardName?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  companyName?: StringFilter | undefined;

  @Field(() => IntFilter, { nullable: true })
  isLegalCompany?: IntFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  legislation?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  country?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  defaultAddress?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType1?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType2?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType3?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType4?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType5?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType6?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimensionType7?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension1?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension2?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension3?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension4?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension5?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension6?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  dimension7?: StringFilter | undefined;

  // @Field(() => AddressListRelationFilter, { nullable: true })
  // addresses?: AddressListRelationFilter | undefined;

  // @Field(() => SiteListRelationFilter, { nullable: true })
  // sites?: SiteListRelationFilter | undefined;
}
