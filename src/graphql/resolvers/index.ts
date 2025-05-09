import { NonEmptyArray } from 'type-graphql';
import { AuthResolvers } from './auth';

const resolvers = [...AuthResolvers];

export const SystemResolvers: NonEmptyArray<any> = [...AuthResolvers];
