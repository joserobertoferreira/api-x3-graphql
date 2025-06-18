import { Address as PrismaAddress } from '@prisma/client';
import { FieldResolver, ID, Resolver, Root } from 'type-graphql';
import { AddressType } from '../../types/address-type';

@Resolver(() => AddressType)
export class AddressResolver {
  @FieldResolver(() => [String], {
    nullable: true,
    description: 'A consolidated list of all non-empty email fields.',
  })
  emails(@Root() address: PrismaAddress): string[] {
    const emailList = [
      address.addressEmail1,
      address.addressEmail2,
      address.addressEmail3,
      address.addressEmail4,
      address.addressEmail5,
    ].filter((email): email is string => !!email && email.trim() !== ''); // Filter out empty strings

    return emailList.length > 0 ? emailList : [];
  }

  @FieldResolver(() => [String], { nullable: true })
  phones(@Root() address: PrismaAddress): string[] {
    const phoneList = [
      address.addressPhoneNumber1,
      address.addressPhoneNumber2,
      address.addressPhoneNumber3,
      address.addressPhoneNumber4,
      address.addressPhoneNumber5,
    ].filter((phone): phone is string => !!phone && phone.trim() !== ''); // Filter out empty strings

    return phoneList.length > 0 ? phoneList : [];
  }

  @FieldResolver(() => ID)
  id(@Root() address: PrismaAddress): string {
    // Converte o tipo Decimal do Prisma para uma string.
    // O GraphQL o tratará como um ID.
    return address.ROWID.toString();
  }

  @FieldResolver(() => String, { name: 'guid', nullable: true })
  uniqueId(@Root() address: PrismaAddress): string | null {
    // Converte o tipo Bytes (Buffer) do Prisma para uma string hexadecimal.
    // Retorna null se o campo for nulo no banco.
    return address.singleID ? Buffer.from(address.singleID).toString('hex') : null;
  }
}
