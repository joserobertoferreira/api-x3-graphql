import { Field, Int, ObjectType } from 'type-graphql';
import { ProductsCount } from '../../utils/generated/type-graphql/resolvers/outputs/ProductsCount';
import { SalesOrderLine } from './sales-order-line-types';
import { SalesOrderPrice } from './sales-order-price-types';

@ObjectType('Products', {})
export class Products {
  @Field((_type) => String, { nullable: false })
  code!: string;

  @Field((_type) => String, { nullable: false })
  productStatisticalGroup1!: string;

  @Field((_type) => String, { nullable: false })
  productStatisticalGroup2!: string;

  @Field((_type) => String, { nullable: false })
  productStatisticalGroup3!: string;

  @Field((_type) => String, { nullable: false })
  productStatisticalGroup4!: string;

  @Field((_type) => String, { nullable: false })
  productStatisticalGroup5!: string;

  @Field((_type) => String, { nullable: false })
  productCategory!: string;

  @Field((_type) => String, { nullable: false })
  description1!: string;

  @Field((_type) => String, { nullable: false })
  description2!: string;

  @Field((_type) => String, { nullable: false })
  description3!: string;

  @Field((_type) => Int, { nullable: false })
  productStatus!: number;

  @Field((_type) => String, { nullable: false })
  purchaseUnit!: string;

  @Field((_type) => String, { nullable: false })
  salesUnit!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel1!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel2!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel3!: string;

  @Field((_type) => String, { nullable: false })
  configuratorProductLine!: string;

  salesOrderLines?: SalesOrderLine[];

  salesOrderPrices?: SalesOrderPrice[];

  @Field((_type) => ProductsCount, { nullable: true })
  _count?: ProductsCount | null;
}
