import { Prisma } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { companyMapper, CompanyRelations } from '../../../../helpers/company-helper';
import { siteMapper } from '../../../../helpers/site-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { AddressWhereInput } from '../../../inputs/address/AddressWhereInput';
import { CompanyWhereInput } from '../../../inputs/company/company-input';
import { SiteWhereInput } from '../../../inputs/site/SiteWhereInput';
import { AddressType } from '../../../types/address-type';
import { CompanyType } from '../../../types/company-type';
import { SiteType } from '../../../types/site-type';

@Resolver(() => CompanyType)
export class SociedadeQueries {
  @Query(() => [CompanyType], { description: 'Returns a list of all existing companies' })
  async companies(
    @Arg('where', () => CompanyWhereInput, { nullable: true }) where: CompanyWhereInput | undefined,
    @Ctx() { services }: ApolloContext,
  ): Promise<CompanyType[]> {
    // Verifica se existe um filtro relacional
    const hasRelationalFilter = where?.sites || where?.addresses;

    console.log('Received where filter:', where);

    if (hasRelationalFilter) {
      console.log('Strategy: Eager loading companies with relational filters');

      const companies = (await services.companyService.findMany({
        where: where,
        include: {
          sites: true,
          addresses: true,
        },
        orderBy: {
          company: 'asc',
        },
      })) as CompanyRelations[];

      try {
        return companies.map(companyMapper);
      } catch (error) {
        // Log the actual error in a logging system
        console.error('Error fetching companies:', error);
        // Throw a generic error for the GraphQL client
        throw new Error('Could not fetch companies.');
      }
    } else {
      console.log('Strategy: Lazy loading companies without relational filters');

      const companies = await services.companyService.findMany({ where: where, orderBy: { company: 'asc' } });

      try {
        return companies;
      } catch (error) {
        // Log the actual error in a logging system
        console.error('Error fetching companies:', error);
        // Throw a generic error for the GraphQL client
        throw new Error('Could not fetch companies.');
      }
    }
  }

  @FieldResolver(() => [SiteType], { nullable: true })
  async sites(
    @Root() company: CompanyType,
    @Arg('where', () => SiteWhereInput, { nullable: true }) where: SiteWhereInput,
    @Ctx() { loaders }: ApolloContext,
  ): Promise<SiteType[] | undefined> {
    console.log(`Fetching sites for company: ${company.company}`);

    if ('sites' in company && Array.isArray(company.sites)) {
      console.log(`Using cached sites for company: ${company.company}`);
      return company.sites;
    }

    const cachedSites = await loaders.companySiteLoader.load(company.company);
    return cachedSites.map(siteMapper);
  }

  @FieldResolver(() => [AddressType], { nullable: true })
  async addresses(
    @Root() company: CompanyType,
    @Arg('where', () => AddressWhereInput, { nullable: true }) where: AddressWhereInput,
    @Ctx() { services }: ApolloContext,
  ): Promise<AddressType[]> {
    console.log(`Fetching addresses for company: ${company.company}`);
    const addressWhere: Prisma.AddressWhereInput = {
      entityType: { equals: 2 },
      entityNumber: { equals: company.company },
      AND: where ? [where as Prisma.AddressWhereInput] : [],
    };

    return services.addressService.findMany(addressWhere);
    // Otherwise, it would be: `prisma.address.findMany({ where: { entityNumber: company.company } })`
  }
}
