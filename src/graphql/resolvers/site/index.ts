import { NonEmptyArray } from 'type-graphql';
import { SiteQueries } from './queries/site-queries';

export const SiteResolvers: NonEmptyArray<typeof SiteQueries> = [SiteQueries];
