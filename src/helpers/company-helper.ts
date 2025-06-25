import { Address, Company, Site } from '@prisma/client';
import { CompanyType } from '../graphql/types/company-type';
import { addressMapper } from './address-helper';
import { siteMapper } from './site-helper';

type SiteRelations = Site & { addresses: Address[] };
export type CompanyRelations = Company & {
  addresses: Address[];
  sites: SiteRelations[];
};

/**
 * Maps a Company object returned by Prisma to the CompanyType format for GraphQL.
 * Mainly, it groups phone and email fields into arrays.
 * @param company The company object from Prisma, with included relations.
 * @returns An object formatted as CompanyType to be sent in the GraphQL response.
 */
export const companyMapper = (company: CompanyRelations): CompanyType => {
  return {
    ...company,
    addresses: company.addresses.map(addressMapper),
    sites: company.sites.map(siteMapper),
  };
};
