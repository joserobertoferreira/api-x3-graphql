import { Site } from '@prisma/client';
import { SiteType } from '../graphql/types/site-type';

/**
 * Maps a Site object returned by Prisma to the SiteType format for GraphQL.
 * Mainly, it groups phone and email fields into arrays.
 * @param site The site object from Prisma, with included relations.
 * @returns An object formatted as SiteType to be sent in the GraphQL response.
 */
export const siteMapper = (site: Site): SiteType => {
  return { ...site };
};
