import { Field, InputType, Int } from 'type-graphql';
import { AddressFilterInput } from '../address/address-input';
import { StringFilter } from '../utils/StringFilter';

@InputType('SupplierWhereInput', {})
export class SupplierWhereInput {
  @Field(() => Int, { defaultValue: 100, description: 'Number of suppliers to return.' })
  take?: number;

  @Field(() => Int, { nullable: true, description: 'Pagination number (default=0)', defaultValue: 0 })
  skip?: number;

  // @Field((_type) => [SupplierWhereInput], { nullable: true })
  // AND?: SupplierWhereInput[] | undefined;

  // @Field((_type) => [SupplierWhereInput], { nullable: true })
  // OR?: SupplierWhereInput[] | undefined;

  // @Field((_type) => [SupplierWhereInput], { nullable: true })
  // NOT?: SupplierWhereInput[] | undefined;

  @Field(() => StringFilter, { nullable: true })
  supplierCode?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  supplierName?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  shortName?: StringFilter | undefined;

  @Field(() => StringFilter, { nullable: true })
  category?: StringFilter | undefined;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean | undefined;

  @Field(() => AddressFilterInput, { nullable: true })
  address?: AddressFilterInput | undefined;
}
