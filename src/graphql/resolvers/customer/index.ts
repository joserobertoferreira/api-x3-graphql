import { NonEmptyArray } from 'type-graphql';
import { CustomerQueries } from './queries/customer-queries';

export const CustomerResolvers: NonEmptyArray<typeof CustomerQueries> = [CustomerQueries];
