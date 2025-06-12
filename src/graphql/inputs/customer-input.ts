import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CustomerFilterInput {
  // @Field(() => Int, { defaultValue: 100, description: 'Number of customers to return.' })
  // first: number;

  // @Field(() => String, { nullable: true, description: 'The cursor of the customer to start after.' })
  // after?: string;

  @Field(() => Int, { defaultValue: 100, description: 'Number of customers to return.' })
  limit: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  offset?: number;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  nameContains?: string;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  email?: string;
}
