import { Prisma } from '@prisma/client';
import { Field, Int, ObjectType } from 'type-graphql';
import { DecimalJSScalar } from '../../utils/generated/type-graphql/scalars';
import { Products } from './products-types';
import { SalesOrderLine } from './sales-order-line-types';
import { SalesOrder } from './sales-order-types';

@ObjectType('SalesOrderPrice', {})
export class SalesOrderPrice {
  @Field((_type) => String, { nullable: false })
  salesOrder!: string;

  @Field((_type) => Int, { nullable: false })
  lineNumber!: number;

  @Field((_type) => Int, { nullable: false })
  sequenceNumber!: number;

  @Field((_type) => String, { nullable: false })
  productDescriptionInUserLanguage!: string;

  @Field((_type) => String, { nullable: false })
  productDescriptionInCustomerLanguage!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel1!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel2!: string;

  @Field((_type) => String, { nullable: false })
  taxLevel3!: string;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  grossPrice!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  netPrice!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  netPriceExcludingTax!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  netPriceIncludingTax!: Prisma.Decimal;

  @Field((_type) => String, { nullable: false })
  tax1!: string;

  @Field((_type) => String, { nullable: false })
  tax2!: string;

  @Field((_type) => String, { nullable: false })
  tax3!: string;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  calculatedTaxableBase1!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  calculatedTaxableBase2!: Prisma.Decimal;

  @Field((_type) => String, { nullable: false })
  salesUnit!: string;

  @Field((_type) => Int, { nullable: false })
  lineStatus!: number;

  order?: SalesOrder | null;

  line?: SalesOrderLine | null;

  productDetails?: Products | null;
}
