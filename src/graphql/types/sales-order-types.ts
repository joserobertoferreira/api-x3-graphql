import { Prisma } from '@prisma/client';
import { GraphQLDate } from 'graphql-scalars';
import { Field, Int, ObjectType } from 'type-graphql';
import { DecimalJSScalar } from '../../utils/generated/type-graphql/scalars';
import { SalesOrderLine } from './sales-order-line-types';
import { SalesOrderPrice } from './sales-order-price-types';

@ObjectType('SalesOrder', {})
export class SalesOrder {
  @Field((_type) => String, { nullable: false })
  id!: string;

  @Field((_type) => String, { nullable: false })
  company!: string;

  @Field((_type) => String, { nullable: false })
  salesOrderType!: string;

  @Field((_type) => Int, { nullable: false })
  category!: number;

  @Field((_type) => String, { nullable: false })
  salesSite!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomer!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomer!: string;

  @Field((_type) => String, { nullable: false })
  payByBusinessPartner!: string;

  @Field((_type) => String, { nullable: false })
  payByBusinessPartnerAddress!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerAddress!: string;

  @Field((_type) => String, { nullable: false })
  customerOrderReference!: string;

  @Field((_type) => GraphQLDate, { nullable: false })
  orderDate!: Date;

  @Field((_type) => GraphQLDate, { nullable: false })
  shipmentDate!: Date;

  @Field((_type) => GraphQLDate, { nullable: false })
  requestedDeliveryDate!: Date;

  @Field((_type) => String, { nullable: false })
  soldToCustomerName1!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerName2!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerAddress!: string;

  @Field((_type) => String, { nullable: false })
  soldAddressLine1!: string;

  @Field((_type) => String, { nullable: false })
  soldAddressLine2!: string;

  @Field((_type) => String, { nullable: false })
  soldAddressLine3!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerPostalCode!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerCity!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerCountry!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerCountryName!: string;

  @Field((_type) => String, { nullable: false })
  soldToCustomerContact!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerName1!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerName2!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerAddress!: string;

  @Field((_type) => String, { nullable: false })
  billAddressLine1!: string;

  @Field((_type) => String, { nullable: false })
  billAddressLine2!: string;

  @Field((_type) => String, { nullable: false })
  billAddressLine3!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerPostalCode!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerCity!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerCountry!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerCountryName!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerEuropeanUnionVatNumber!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerName1!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerName2!: string;

  @Field((_type) => String, { nullable: false })
  billToCustomerContact!: string;

  @Field((_type) => String, { nullable: false })
  shipAddressLine1!: string;

  @Field((_type) => String, { nullable: false })
  shipAddressLine2!: string;

  @Field((_type) => String, { nullable: false })
  shipAddressLine3!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerPostalCode!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerCity!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerCountry!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerCountryName!: string;

  @Field((_type) => String, { nullable: false })
  shipToCustomerContact!: string;

  @Field((_type) => String, { nullable: false })
  currency!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType1!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType2!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType3!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType4!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType5!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType6!: string;

  @Field((_type) => String, { nullable: false })
  dimensionType7!: string;

  @Field((_type) => String, { nullable: false })
  dimension1!: string;

  @Field((_type) => String, { nullable: false })
  dimension2!: string;

  @Field((_type) => String, { nullable: false })
  dimension3!: string;

  @Field((_type) => String, { nullable: false })
  dimension4!: string;

  @Field((_type) => String, { nullable: false })
  dimension5!: string;

  @Field((_type) => String, { nullable: false })
  dimension6!: string;

  @Field((_type) => String, { nullable: false })
  dimension7!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  soldToCustomerLanguage!: string;

  @Field((_type) => String, { nullable: false })
  taxRule!: string;

  @Field((_type) => String, { nullable: false })
  paymentTerm!: string;

  @Field((_type) => String, { nullable: false })
  customerStatisticalGroup1!: string;

  @Field((_type) => Int, { nullable: false })
  priceIncludingOrExcludingTax!: number;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  linesAmountExcludingTax!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  linesAmountIncludingTax!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  linesAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  linesAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  totalAmountExcludingTax!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  totalAmountIncludingTax!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  totalAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  totalAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal;

  @Field((_type) => Int, { nullable: false })
  orderStatus!: number;

  @Field((_type) => Int, { nullable: false })
  invoicedStatus!: number;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  taxAmount!: Prisma.Decimal;

  @Field((_type) => DecimalJSScalar, { nullable: false })
  taxableAmount!: Prisma.Decimal;

  @Field(() => [SalesOrderLine], { nullable: true })
  orderLines?: SalesOrderLine[];

  @Field(() => [SalesOrderPrice], { nullable: true })
  orderPrices?: SalesOrderPrice[];
}
