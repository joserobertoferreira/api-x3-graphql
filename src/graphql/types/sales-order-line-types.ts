import { Prisma } from '@prisma/client';
import { Field, Int, ObjectType } from 'type-graphql';
import { DecimalJSScalar } from '../../utils/generated/type-graphql/scalars';
import { Products } from './products-types';
import { SalesOrderPrice } from './sales-order-price-types';
import { SalesOrder } from './sales-order-types';

@ObjectType('SalesOrderLine', {})
export class SalesOrderLine {
  @Field((_type) => String, { nullable: false })
  salesOrder!: string;

  @Field((_type) => Int, { nullable: false })
  lineNumber!: number;

  @Field((_type) => Int, { nullable: false })
  sequenceNumber!: number;

  @Field((_type) => String, { nullable: false })
  company!: string;

  @Field((_type) => Int, { nullable: false })
  category!: number;

  @Field((_type) => String, { nullable: false })
  salesSite!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomer!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerAddress!: string;

  @Field((_type) => String, { nullable: false })
  product!: string;

  @Field((_type) => Int, { nullable: false })
  lineStatus!: number;

  @Field((_type) => Int, { nullable: false })
  isInvoiced!: number;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  quantityInSalesUnitOrdered!: Prisma.Decimal;

  order?: SalesOrder | null;

  price?: SalesOrderPrice | null;

  productDetails?: Products | null;
}
