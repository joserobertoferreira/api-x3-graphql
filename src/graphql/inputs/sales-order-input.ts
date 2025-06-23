import { GraphQLDate } from 'graphql-scalars';
import { Field, Float, InputType, Int } from 'type-graphql';

@InputType()
export class CreateSalesOrderLineInput {
  @Field(() => String, { description: 'Product SKU' })
  product: string;

  @Field(() => Float, { description: 'Quantity of the product in sales unit' })
  quantity: number;

  @Field(() => Float, { nullable: true, description: 'Unit price of the product' })
  grossPrice?: number;

  @Field(() => Date, { nullable: true })
  expectedDeliveryDate?: Date;

  @Field(() => String, { nullable: true, description: 'Tax level code for the product' })
  taxLevelCode?: string;
}

@InputType({ description: 'Data to create a sales order, include header and lines' })
export class CreateSalesOrderInput {
  @Field(() => String, { description: 'Sales site' })
  salesSite: string;

  @Field(() => String, { nullable: true, description: 'Sales order type' })
  salesOrderType?: string;

  @Field(() => GraphQLDate, { nullable: true, description: 'Order date - YYYYMMDD' })
  orderDate?: Date;

  @Field(() => String, { description: 'Sold-to-customer code' })
  soldToCustomer: string;

  @Field(() => String, { nullable: true, description: 'Reference' })
  customerOrderReference?: string;

  @Field(() => String, { nullable: true, description: 'Delivery address code' })
  shipToCustomerAddress?: string;

  @Field(() => String, { nullable: true, description: 'Tax rule' })
  taxRule?: string;

  @Field(() => String, { nullable: true, description: 'Currency code' })
  currency?: string;

  @Field(() => Int, { nullable: true, description: 'Price -/+ tax' })
  priceIncludingOrExcludingTax?: number;

  @Field(() => String, { nullable: true, description: 'Shipment site' })
  shipmentSite?: string;

  @Field(() => GraphQLDate, { nullable: true, description: 'Requested delivery date - YYYYMMDD' })
  requestedDeliveryDate?: Date;

  @Field(() => GraphQLDate, { nullable: true, description: 'Shipment date - YYYYMMDD' })
  shipmentDate?: Date;

  @Field(() => String, { nullable: true, description: 'Payment term' })
  paymentTerm?: string;

  @Field(() => String, { description: 'Fixture' })
  dimension1: string;

  @Field(() => String, { nullable: true, description: 'Broker' })
  dimension2?: string;

  @Field(() => String, { nullable: true, description: 'Department' })
  dimension3?: string;

  @Field(() => String, { nullable: true, description: 'Location' })
  dimension4?: string;

  @Field(() => String, { nullable: true, description: 'Type' })
  dimension5?: string;

  @Field(() => String, { nullable: true, description: 'Product' })
  dimension6?: string;

  @Field(() => String, { nullable: true, description: 'Analysis' })
  dimension7?: string;

  @Field(() => [CreateSalesOrderLineInput], { description: 'An array with all products to order.' })
  lines: CreateSalesOrderLineInput[];
}
