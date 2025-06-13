import { Field, InputType, Int } from 'type-graphql';
import { AddressFilterInput } from './address-input';

@InputType()
export class CustomerFilterInput {
  // @Field(() => Int, { defaultValue: 100, description: 'Number of customers to return.' })
  // first: number;

  // @Field(() => String, { nullable: true, description: 'The cursor of the customer to start after.' })
  // after?: string;

  @Field(() => Int, { defaultValue: 100, description: 'Number of customers to return.' })
  take?: number;

  @Field(() => Int, { nullable: true, description: 'Pagination number (default=0)', defaultValue: 0 })
  skip?: number;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  nameContains?: string;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field(() => AddressFilterInput, { nullable: true })
  address?: AddressFilterInput;
}
