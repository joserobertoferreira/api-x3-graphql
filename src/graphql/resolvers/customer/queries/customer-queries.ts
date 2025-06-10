import { Prisma } from '@prisma/client';
import { Arg, Ctx, FieldResolver, Int, Query, Resolver, Root } from 'type-graphql';
import { ApolloContext } from '../../../../middleware/context-middleware';
import { AddressType } from '../../../types/address-type';
import { CustomerType } from '../../../types/customer-type';

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
  @Query(() => [CustomerType], { description: 'Fetches a list of customers, with optional filters.' })
  async customers(
    @Arg('limit', () => Int, { nullable: true, defaultValue: 20 }) limit: number,
    @Arg('offset', () => Int, { nullable: true, defaultValue: 0 }) offset: number,
    @Arg('category', { nullable: true }) category: string,
    @Ctx() { services }: ApolloContext,
  ): Promise<CustomerType[]> {
    const where: Prisma.CustomerWhereInput = {};
    if (category) {
      where.category = category;
    }

    return services.customerService.findCustomers({
      take: limit,
      skip: offset,
      where,
    });
  }

  // Field Resolver para o campo 'addresses' do CustomerType
  @FieldResolver(() => [AddressType])
  async addresses(
    @Root() customer: CustomerType,
    @Arg('limit', () => Int, { nullable: true, defaultValue: 10 }) limit: number,
    @Arg('offset', () => Int, { nullable: true, defaultValue: 0 }) offset: number,
    @Ctx() { services }: ApolloContext,
  ): Promise<AddressType[]> {
    // 'customer' é o objeto pai, já resolvido pela query 'customer' ou 'customers'
    const customerCode = customer.customerCode;

    // IMPORTANTE: Confirme este valor. Qual o entityType para Customer?
    const customerEntityType = 2;

    return services.addressService.findAddressesByEntity(
      customerEntityType,
      customerCode,
      undefined, // code opcional
      {
        take: limit,
        skip: offset,
      },
    );
  }
}
