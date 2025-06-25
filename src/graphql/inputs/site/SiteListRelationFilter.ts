import { Field, InputType } from 'type-graphql';
import { SiteWhereInput } from './SiteWhereInput';

@InputType('SiteListRelationFilter', {})
export class SiteListRelationFilter {
  @Field((_type) => SiteWhereInput, {
    nullable: true,
  })
  every?: SiteWhereInput | undefined;

  @Field((_type) => SiteWhereInput, {
    nullable: true,
  })
  some?: SiteWhereInput | undefined;

  @Field((_type) => SiteWhereInput, {
    nullable: true,
  })
  none?: SiteWhereInput | undefined;
}
