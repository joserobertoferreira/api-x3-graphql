import { Supplier } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { addressMapper } from '../../../../helpers/address-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { SupplierWhereInput } from '../../../inputs/supplier/supplier-input';
import { AddressType } from '../../../types/address-type';
import { SupplierPaginationType, SupplierType } from '../../../types/supplier-type';

interface LocalContext {
  services: ApolloContext['services'];
  loaders: ApolloContext['loaders'];
}

@Resolver(() => SupplierType)
export class SupplierQueries {
  @Query(() => [SupplierPaginationType], { description: 'Returns a list of suppliers, with filter options.' })
  async suppliers(
    @Arg('where', () => SupplierWhereInput, { nullable: true }) where: SupplierWhereInput | undefined,
    @Ctx() { services }: ApolloContext,
  ): Promise<SupplierPaginationType[]> {
    console.log('Fetching suppliers with filter:', where);

    const { take = 100, skip = 0, ...filter } = where || {};

    // Map GraphQL SupplierWhereInput to Prisma.SupplierWhereInput
    const prismaWhere = filter
      ? {
          ...filter,
          isActive: typeof filter.isActive === 'boolean' ? (filter.isActive ? 2 : 1) : undefined,
        }
      : undefined;

    const result = await services.supplierService.executeInTransaction(async (tx) => {
      const suppliers = await tx.supplier.findMany({
        where: prismaWhere,
        take,
        skip,
        orderBy: { supplierCode: 'asc' },
      });
      const totalCount = await tx.supplier.count({ where: prismaWhere });

      return { suppliers, totalCount };
    });

    const { suppliers, totalCount } = result;

    return [
      {
        nodes: suppliers,
        totalCount: totalCount,
        hasNextPage: skip + take < totalCount,
      },
    ];
  }

  @FieldResolver(() => [AddressType], { nullable: true })
  async addresses(@Root() supplier: Supplier, @Ctx() { loaders }: LocalContext): Promise<AddressType[] | undefined> {
    console.log(`Addresses for supplier ${supplier.supplierCode}: Lazy loading with DataLoader.`);

    const { supplierAddressLoader } = loaders;

    if (!supplierAddressLoader) throw new Error('supplierAddressLoader is missing in context');

    const addresses = await supplierAddressLoader.load(supplier.supplierCode);

    return addresses.map(addressMapper);
  }
}
