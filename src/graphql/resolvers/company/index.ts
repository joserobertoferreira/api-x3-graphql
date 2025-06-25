import { NonEmptyArray } from 'type-graphql';
import { CompanyQueries } from './queries/company-queries';

export const CompanyResolvers: NonEmptyArray<typeof CompanyQueries> = [CompanyQueries];
