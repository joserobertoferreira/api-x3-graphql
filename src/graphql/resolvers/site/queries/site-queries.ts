import { Prisma, Site } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { addressMapper } from '../../../../helpers/address-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { SiteWhereInput } from '../../../inputs/site/SiteWhereInput';
import { AddressType } from '../../../types/address-type';
import { SiteType } from '../../../types/site-type';

interface LocalContext {
  services: ApolloContext['services'];
  loaders: ApolloContext['loaders'];
}

@Resolver(() => SiteType)
export class SiteQueries {
  @Query(() => [SiteType], { description: 'Returns a list of sites, with filter options.' })
  async sites(
    @Arg('where', () => SiteWhereInput, { nullable: true }) where: SiteWhereInput | undefined,
    @Ctx() { services }: ApolloContext,
  ): Promise<SiteType[]> {
    return services.siteService.findMany(where as Prisma.SiteWhereInput);
  }

  @FieldResolver(() => [AddressType], { nullable: true })
  async addresses(@Root() site: Site, @Ctx() { loaders }: LocalContext): Promise<AddressType[] | undefined> {
    console.log(`Addresses for site ${site.siteCode}: Lazy loading with DataLoader.`);

    const { siteAddressLoader } = loaders;

    if (!siteAddressLoader) throw new Error('siteAddressLoader is missing in context');

    const addresses = await siteAddressLoader.load(site.siteCode);

    return addresses.map(addressMapper);
  }
}
