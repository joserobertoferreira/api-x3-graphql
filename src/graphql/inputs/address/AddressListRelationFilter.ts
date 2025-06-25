import { Field, InputType } from 'type-graphql';
import { AddressWhereInput } from './AddressWhereInput';

@InputType('AddressListRelationFilter', {})
export class AddressListRelationFilter {
  @Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  every?: AddressWhereInput | undefined;

  @Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  some?: AddressWhereInput | undefined;

  @Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  none?: AddressWhereInput | undefined;
}
