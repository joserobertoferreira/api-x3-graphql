import { NonEmptyArray } from 'type-graphql';
import { SupplierQueries } from './queries/supplier-queries';

export const SupplierResolvers: NonEmptyArray<typeof SupplierQueries> = [SupplierQueries];
