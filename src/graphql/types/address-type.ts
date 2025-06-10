import { Decimal } from '@prisma/client/runtime/library';
import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Represent an address for customer or business partner' })
export class AddressType {
  @Field(() => ID, { description: 'Unique address ID' })
  id?: Decimal;

  @Field({ description: 'Address code' })
  code!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  addressLine1?: string;

  @Field({ nullable: true })
  addressLine2?: string;

  @Field({ nullable: true })
  addressLine3?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true, description: 'Flag to set if is default address' })
  isDefault?: number;
}
