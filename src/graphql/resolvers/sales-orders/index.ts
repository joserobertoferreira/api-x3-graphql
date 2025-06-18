import { NonEmptyArray } from 'type-graphql';
import { SalesOrderMutations } from './mutations/sales-order-mutation';

export const SalesOrderResolvers: NonEmptyArray<typeof SalesOrderMutations> = [SalesOrderMutations];
