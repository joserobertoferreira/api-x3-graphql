import { NonEmptyArray } from 'type-graphql';
// import { AuthResolvers } from './auth';
import { AddressResolver } from './address/address-resolver';
import { CompanyResolvers } from './company';
import { CustomerResolvers } from './customer';
import { SalesOrderResolvers } from './sales-orders';
import { SiteResolvers } from './site';

// const resolvers = [...AuthResolvers, CustomerResolvers];
// const resolvers = [...CustomerResolvers, AddressResolver];

export const SystemResolvers: NonEmptyArray<any> = [
  ...CustomerResolvers,
  AddressResolver,
  ...SalesOrderResolvers,
  ...CompanyResolvers,
  ...SiteResolvers,
];
