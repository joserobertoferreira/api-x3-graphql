import { Field, InputType, Int } from 'type-graphql';

@InputType({ description: 'Data to filter addresses. All fields are optional.' })
export class AddressFilterInput {
  @Field(() => Int, { defaultValue: 10, description: 'Number of addresses to return.' })
  limit: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  offset?: number;

  // @Field(() => Int, { defaultValue: 10, description: 'Number of addresses to return.' })
  // first: number;

  // @Field(() => String, { nullable: true, description: 'The cursor of the address to start after.' })
  // after?: string;

  @Field(() => String, { nullable: true })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  country?: string;
}

@InputType({ description: 'Data to create a new address.' })
export class CreateAddressInput {
  @Field()
  entityType: number;

  @Field()
  entityNumber: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  addressLine1?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => [String], { nullable: true, description: 'Telephone list for address. The order will be preserved.' })
  phones?: string[];
}

@InputType({ description: 'Data to update an address.' })
export class UpdateAddressInput {
  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  addressLine1?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => [String], { nullable: true, description: 'Replace all phones in entire list.' })
  phones?: string[];
}
