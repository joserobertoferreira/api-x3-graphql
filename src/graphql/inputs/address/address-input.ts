import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Data to filter addresses. All fields are optional.' })
export class AddressFilterInput {
  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => [String], { nullable: true, description: 'List of phone numbers to filter addresses.' })
  phones?: string[];

  @Field(() => [String], { nullable: true, description: 'List of emails to filter addresses.' })
  emails?: string[];
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
