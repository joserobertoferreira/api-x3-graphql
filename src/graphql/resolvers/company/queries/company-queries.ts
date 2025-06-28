import { Company, Site } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { CompanyWhereInput } from '../../../inputs/company/company-input';
import { AddressType } from '../../../types/address-type';
import { CompanyType } from '../../../types/company-type';
import { SiteType } from '../../../types/site-type';

@Resolver(() => CompanyType)
export class CompanyQueries {
  @Query(() => [CompanyType], { description: 'Returns a list of all existing companies based on filter' })
  async companies(
    @Arg('where', () => CompanyWhereInput, { nullable: true }) where: CompanyWhereInput,
    @Ctx() { services }: ApolloContext,
  ): Promise<Company[]> {
    return services.companyService.findMany({ where });
  }

  @FieldResolver(() => [SiteType], { nullable: true })
  async sites(@Root() company: Company, @Ctx() { loaders }: ApolloContext): Promise<Site[]> {
    return await loaders.companySiteLoader.load(company.company);
  }

  @FieldResolver(() => [AddressType], { nullable: true })
  async addresses(@Root() company: Company, @Ctx() { loaders }: ApolloContext): Promise<AddressType[]> {
    return await loaders.companyAddressLoader.load(company.company);
  }
}
