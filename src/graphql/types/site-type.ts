import { Field, ObjectType } from 'type-graphql';
import { AddressType } from './address-type';

@ObjectType({ description: 'Represent a company site' })
export class SiteType {
  @Field((_type) => String)
  siteCode!: string;

  @Field((_type) => String)
  standardName!: string;

  @Field((_type) => String)
  siteName!: string;

  @Field((_type) => String)
  country!: string;

  @Field((_type) => String)
  legalCompany!: string;

  @Field((_type) => String)
  legislation!: string;

  @Field((_type) => String, { nullable: true })
  defaultAddress?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType1?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType2?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType3?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType4?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType5?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType6?: string;

  @Field((_type) => String, { nullable: true })
  dimensionType7?: string;

  @Field((_type) => String, { nullable: true })
  dimension1?: string;

  @Field((_type) => String, { nullable: true })
  dimension2?: string;

  @Field((_type) => String, { nullable: true })
  dimension3?: string;

  @Field((_type) => String, { nullable: true })
  dimension4?: string;

  @Field((_type) => String, { nullable: true })
  dimension5?: string;

  @Field((_type) => String, { nullable: true })
  dimension6?: string;

  @Field((_type) => String, { nullable: true })
  dimension7?: string;

  @Field(() => [AddressType], { nullable: true, description: 'List of addresses associated with the site' })
  addresses?: AddressType[];
}
