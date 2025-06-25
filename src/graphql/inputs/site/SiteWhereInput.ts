import { Field, InputType } from 'type-graphql';
import { IntFilter } from '../utils/IntFilter';
import { StringFilter } from '../utils/StringFilter';

@InputType('SiteWhereInput', {})
export class SiteWhereInput {
  @Field((_type) => [SiteWhereInput], { nullable: true })
  AND?: SiteWhereInput[] | undefined;

  @Field((_type) => [SiteWhereInput], { nullable: true })
  OR?: SiteWhereInput[] | undefined;

  @Field((_type) => [SiteWhereInput], { nullable: true })
  NOT?: SiteWhereInput[] | undefined;

  @Field((_type) => IntFilter, { nullable: true })
  UPDTICK_0?: IntFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  siteCode?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  standardName?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  siteName?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  country?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  legalCompany?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  legislation?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  defaultAddress?: StringFilter | undefined;

  // @Field((_type) => CompanyNullableRelationFilter, {    nullable: true  })
  // company?: CompanyNullableRelationFilter | undefined;
}
