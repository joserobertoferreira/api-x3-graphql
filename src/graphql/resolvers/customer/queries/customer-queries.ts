import { Prisma } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { buildCustomerWhereClause } from '../../../../helpers/filter-helper';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { AddressFilterInput } from '../../../inputs/address-input';
import { CustomerFilterInput } from '../../../inputs/customer-input';
import { AddressType } from '../../../types/address-type';
import { CustomerPaginationType, CustomerType, IPaginated } from '../../../types/customer-type';

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

  // Query to fetch a list of customers
  // @Query(() => CustomerConnection, { description: 'Fetches a list of customers, with optional filters.' })
  // @Query(() => [CustomerType], { description: 'Fetches a list of customers, with optional filters.' })
  @Query(() => CustomerPaginationType, { description: 'Fetches a list of customers, with optional filters.' })
  async customers(
    @Arg('input', () => CustomerFilterInput) input: CustomerFilterInput,
    @Ctx() { services }: ApolloContext,
  ): Promise<IPaginated<CustomerType>> {
    // ): Promise<CustomerType[]> {
    // ): Promise<CustomerConnection> {
    const where = buildCustomerWhereClause(input);

    const limit = input.limit || 100; // Default limit if not provided
    const offset = input.offset || 0; // Default offset if not provided

    const result = await services.customerService.executeInTransaction(async (tx) => {
      // Fetch customers with pagination
      const nodes = await tx.customer.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: { customerName: 'asc' }, // Order by customer name
        include: {
          addresses: true, // Include addresses if needed
        },
      });

      // Fetch the total count of customers matching the criteria
      const totalCount = await tx.customer.count({ where });

      return { nodes, totalCount };
    });

    const { nodes, totalCount } = result;

    const hasNextPage = offset + limit < totalCount;

    return {
      nodes,
      totalCount,
      hasNextPage,
    };
    // Decodifica o cursor 'after' para o objeto composto
    // const cursorObject = input.after ? decodeCompositeCursor(input.after) : undefined;

    // const connectionResult = await services.customerService.findCustomersByCursor({
    //   where,
    //   take: input.first,
    //   cursorObject,
    // });

    // return connectionResult;
  }

  // Field Resolver para o campo 'addresses' do CustomerType
  // @Arg('limit', () => Int, { nullable: true, defaultValue: 100 }) limit: number,
  // @Arg('offset', () => Int, { nullable: true, defaultValue: 0 }) offset: number,
  @FieldResolver(() => [AddressType])
  async addresses(
    @Root() customer: CustomerType,
    @Arg('input', () => AddressFilterInput, { nullable: true }) input: AddressFilterInput,
    @Ctx() { services }: ApolloContext,
  ): Promise<AddressType[]> {
    // 'customer' é o objeto pai, já resolvido pela query 'customer' ou 'customers'
    const customerCode = customer.customerCode;
    const customerEntityType = 1;

    const where: Prisma.AddressWhereInput = {};
    const limit = input?.limit ?? 10;
    const offset = input?.offset ?? 0;
    const filter: Prisma.AddressWhereInput[] = [];

    if (input?.city) {
      const city = input.city;
      // Lógica de simulação de case-insensitive
      filter.push({
        OR: [
          { city: { contains: city.toUpperCase() } },
          { city: { contains: city.toLowerCase() } },
          { city: { contains: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() } },
        ],
      });
    }

    if (input?.country) {
      filter.push({
        country: {
          in: [input.country.toUpperCase(), input.country.toLowerCase()],
        },
      });
    }

    if (filter.length > 0) {
      // Use a chave AND para combinar todas as condições
      where.AND = filter;
    }

    // Ensure skip is always a number
    return services.addressService.findAddressesByEntity(
      customerEntityType,
      customerCode,
      undefined, // code opcional
      {
        where,
        take: input.limit,
        skip: input.offset,
      },
    );
  }
}
