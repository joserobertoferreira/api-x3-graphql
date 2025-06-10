import { Field, Int, ObjectType } from 'type-graphql';
// import { Decimal } from '@prisma/client/runtime/library';
// import { GraphQLDecimal } from 'prisma-graphql-type-converter';
import { AddressType } from './address-type';

@ObjectType({ description: 'Represents a customer in the system' })
export class CustomerType {
  // @Field(() => GraphQLDecimal, { description: "ID único do cliente (ROWID)" })
  // id!: Decimal;

  @Field({ description: 'Customer code' })
  customerCode!: string;

  @Field({ nullable: true })
  customerName?: string;

  @Field({ nullable: true })
  shortName?: string;

  @Field({ nullable: true })
  category?: string;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  customerCurrency?: string;

  // Campo para a relação com endereços
  @Field(() => [AddressType], { nullable: true, description: 'List of customer addresses' })
  addresses?: AddressType[];
}
