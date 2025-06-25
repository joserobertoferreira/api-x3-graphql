import { Address } from '@prisma/client';
import { AddressType } from '../graphql/types/address-type';

/**
 * Maps a Address object returned by Prisma to the AddressType format for GraphQL.
 * Mainly, it groups phone and email fields into arrays.
 * @param address Address object
 * @returns An object formatted as AddressType to be sent in the GraphQL response.
 */
export const addressMapper = (address: Address): AddressType => {
  return {
    ...address,
    // Combine all phone fields into an array, filtering out empty or null values
    phones: [
      address.addressPhoneNumber1,
      address.addressPhoneNumber2,
      address.addressPhoneNumber3,
      address.addressPhoneNumber4,
      address.addressPhoneNumber5,
    ].filter((phone): phone is string => !!phone && phone.trim() !== ''),

    // Combine all email fields into an array, filtering out empty or null values
    emails: [
      address.addressEmail1,
      address.addressEmail2,
      address.addressEmail3,
      address.addressEmail4,
      address.addressEmail5,
    ].filter((email): email is string => !!email && email.trim() !== ''),
  };
};
