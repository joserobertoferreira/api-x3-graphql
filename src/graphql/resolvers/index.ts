import { NonEmptyArray } from 'type-graphql';
// import { AuthResolvers } from './auth';
import { CustomerResolvers } from './customer';

// const resolvers = [...AuthResolvers, CustomerResolvers];
const resolvers = [...CustomerResolvers];

export const SystemResolvers: NonEmptyArray<any> = [...CustomerResolvers];
