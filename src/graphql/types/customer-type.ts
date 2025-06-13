import { Field, Int, ObjectType } from 'type-graphql';
// import { Decimal } from '@prisma/client/runtime/library';
// import { GraphQLDecimal } from 'prisma-graphql-type-converter';
import { AddressType } from './address-type';
import { PageInfo, PaginationType } from './pagination-type';

export interface IPaginated<T> {
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
}

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

  @Field({ nullable: true, description: 'Customer default address code' })
  defaultAddressCode?: string;

  // Campo para a relação com endereços
  @Field(() => [AddressType], { nullable: true, description: 'List of customer addresses' })
  addresses?: AddressType[];
}

@ObjectType({ description: 'An edge in a connection.' })
export class CustomerEdge {
  @Field({ description: 'A cursor for use in pagination.' })
  cursor: string;

  @Field(() => CustomerType, { description: 'The item at the end of the edge.' })
  node: CustomerType;
}

@ObjectType({ description: 'A connection to a list of items.' })
export class CustomerConnection {
  @Field(() => [CustomerEdge], { description: 'A list of edges.' })
  edges: CustomerEdge[];

  @Field(() => PageInfo, { description: 'Information to aid in pagination.' })
  pageInfo: PageInfo;
}

@ObjectType({ description: 'Represents a paginated list of customers' })
export class CustomerPaginationType extends PaginationType(CustomerType) {}
