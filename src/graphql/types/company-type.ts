import { Field, Int, ObjectType } from 'type-graphql';
import { AddressType } from './address-type';
import { SiteType } from './site-type';

@ObjectType({ description: 'Represent a company' })
export class CompanyType {
  @Field(() => String)
  company!: string;

  @Field(() => String)
  standardName!: string;

  @Field(() => String)
  companyName!: string;

  @Field(() => Int)
  isLegalCompany!: number;

  @Field(() => String)
  legislation!: string;

  @Field(() => String, { nullable: true })
  defaultAddress?: string;

  @Field(() => String, { nullable: true })
  dimensionType1?: string;

  @Field(() => String, { nullable: true })
  dimensionType2?: string;

  @Field(() => String, { nullable: true })
  dimensionType3?: string;

  @Field(() => String, { nullable: true })
  dimensionType4?: string;

  @Field(() => String, { nullable: true })
  dimensionType5?: string;

  @Field(() => String, { nullable: true })
  dimensionType6?: string;

  @Field(() => String, { nullable: true })
  dimensionType7?: string;

  @Field(() => String, { nullable: true })
  dimension1?: string;

  @Field(() => String, { nullable: true })
  dimension2?: string;

  @Field(() => String, { nullable: true })
  dimension3?: string;

  @Field(() => String, { nullable: true })
  dimension4?: string;

  @Field(() => String, { nullable: true })
  dimension5?: string;

  @Field(() => String, { nullable: true })
  dimension6?: string;

  @Field(() => String, { nullable: true })
  dimension7?: string;

  @Field(() => [SiteType], { nullable: true, description: 'List of sites associated with the company' })
  sites?: SiteType[];

  @Field(() => [AddressType], { nullable: true, description: 'List of company addresses' })
  addresses?: AddressType[];
}
