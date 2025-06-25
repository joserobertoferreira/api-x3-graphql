import { Field, InputType } from 'type-graphql';
import { IntFilter } from '../utils/IntFilter';
import { StringFilter } from '../utils/StringFilter';

@InputType('AddressWhereInput', {})
export class AddressWhereInput {
  @Field((_type) => [AddressWhereInput], { nullable: true })
  AND?: AddressWhereInput[] | undefined;

  @Field((_type) => [AddressWhereInput], { nullable: true })
  OR?: AddressWhereInput[] | undefined;

  @Field((_type) => [AddressWhereInput], { nullable: true })
  NOT?: AddressWhereInput[] | undefined;

  @Field((_type) => IntFilter, { nullable: true })
  entityType?: IntFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  entityNumber?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  description?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  defaultBankId?: StringFilter | undefined;

  @Field((_type) => IntFilter, { nullable: true })
  isDefault?: IntFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressLine1?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressLine2?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressLine3?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  zipCode?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  city?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  state?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  country?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  countryName?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressPhoneNumber1?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressPhoneNumber2?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressPhoneNumber3?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressPhoneNumber4?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressPhoneNumber5?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressEmail1?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressEmail2?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressEmail3?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressEmail4?: StringFilter | undefined;

  @Field((_type) => StringFilter, { nullable: true })
  addressEmail5?: StringFilter | undefined;
}
