import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { buildCustomerWhereClause } from '../../../../helpers/filter-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { CustomerFilterInput } from '../../../inputs/customer-input';
import { AddressType } from '../../../types/address-type';
import { CustomerPaginationType, CustomerType } from '../../../types/customer-type';

@Resolver(() => CustomerType)
export class CustomerQueries {
  // Query to fetch a single customer
  @Query(() => CustomerType, { nullable: true, description: 'Fetches a single customer by their business code.' })
  async customer(
    @Arg('customerCode') customerCode: string,
    @Ctx() { services }: ApolloContext,
  ): Promise<CustomerType | null> {
    return services.customerService.findCustomerByCode(customerCode);
  }

  @Query(() => CustomerPaginationType, { description: 'Fetches a list of customers, with optional filters.' })
  async customers(
    @Arg('filter', () => CustomerFilterInput, { nullable: true }) filter: CustomerFilterInput,
    @Ctx() { services }: ApolloContext,
  ): Promise<CustomerPaginationType> {
    console.log('Filtro GraphQL Recebido:', JSON.stringify(filter, null, 2));
    const where = buildCustomerWhereClause(filter);
    console.log('Cláusula WHERE gerada pelo Helper:', JSON.stringify(where, null, 2));

    const take = filter?.take || 100; // Default limit if not provided
    const skip = filter?.skip || 0; // Default offset if not provided

    // Fetch customers with pagination
    const result = await services.customerService.executeInTransaction(async (tx) => {
      // Fetch customers with pagination
      const records = await tx.customer.findMany({
        where,
        take: take,
        skip: skip,
        orderBy: { customerCode: 'asc' },
      });

      // Fetch the total count of customers matching the criteria
      const totalCount = await tx.customer.count({ where });

      return { records, totalCount };
    });

    const { records, totalCount } = result;

    const customers = records.map((customer) => ({
      ...customer,
      id: customer.id.toString(), // Convert ID to string for GraphQL compatibility
    }));

    return {
      nodes: customers,
      totalCount,
      hasNextPage: take + skip < totalCount,
    };
  }

  @FieldResolver(() => [AddressType])
  async addresses(@Root() customer: CustomerType, @Ctx() { services }: ApolloContext): Promise<AddressType[]> {
    // 'customer' é o objeto pai, já resolvido pela query 'customer' ou 'customers'
    const customerCode = customer.customerCode;
    const customerEntityType = 1;

    // const where: Prisma.AddressWhereInput = {};
    // const filter: Prisma.AddressWhereInput[] = [];

    // if (input?.city) {
    //   const city = input.city;
    //   // Lógica de simulação de case-insensitive
    //   filter.push({
    //     OR: [
    //       { city: { contains: city.toUpperCase() } },
    //       { city: { contains: city.toLowerCase() } },
    //       { city: { contains: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() } },
    //     ],
    //   });
    // }

    // if (input?.country) {
    //   filter.push({
    //     country: {
    //       in: [input.country.toUpperCase(), input.country.toLowerCase()],
    //     },
    //   });
    // }

    // if (filter.length > 0) {
    //   // Use a chave AND para combinar todas as condições
    //   where.AND = filter;
    // }

    // Ensure skip is always a number
    const addresses = await services.addressService.findAddressesByEntity(
      customerEntityType,
      customerCode,
      undefined, // code opcional
      // {
      //   where,
      //   take: input.limit,
      //   skip: input.offset,
      // },
    );
    return addresses.map((address) => ({
      ...address,
      id: address.ROWID.toString(),
    }));
  }
}
