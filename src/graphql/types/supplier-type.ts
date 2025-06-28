import { Prisma } from '@prisma/client';
import { GraphQLDate } from 'graphql-scalars';
import { Field, Int, ObjectType } from 'type-graphql';
import { DecimalJSScalar } from '../../utils/scalars';
import { AddressType } from './address-type';
import { PaginationType } from './pagination-type';

@ObjectType()
export class SupplierType {
  @Field(() => String)
  supplierCode!: string;

  @Field(() => String, { nullable: false, description: 'The standard name of the supplier' })
  supplierName!: string;

  @Field(() => Int, { nullable: true, description: 'The type of the supplier' })
  supplierType?: number;

  @Field(() => String, { nullable: true })
  category?: string;

  @Field(() => String, { nullable: true })
  payToBusinessPartner?: string;

  @Field(() => String, { nullable: true })
  payToBusinessPartnerAddress?: string;

  @Field(() => String, { nullable: true })
  billBySupplier?: string;

  @Field(() => String, { nullable: true })
  billBySupplierAddress?: string;

  @Field(() => String, { nullable: true })
  groupSupplier?: string;

  @Field(() => String, { nullable: true })
  riskSupplier?: string;

  @Field(() => String, { nullable: true })
  ourCustomerNumberForSupplier?: string;

  @Field(() => String, { nullable: true })
  carrier?: string;

  @Field(() => String, { nullable: true })
  defaultContact?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Int, { nullable: true })
  supplierABCClass?: number;

  @Field(() => String, { nullable: true })
  unavailable?: string;

  @Field(() => String, { nullable: true })
  currency?: string;

  @Field(() => Int, { nullable: true })
  rateType?: number;

  @Field(() => String, { nullable: true })
  paymentTerm?: string;

  @Field(() => String, { nullable: true })
  earlyDiscount?: string;

  @Field(() => String, { nullable: true })
  taxRule?: string;

  @Field(() => String, { nullable: true })
  deliveryMode?: string;

  @Field(() => String, { nullable: true })
  incoterm?: string;

  @Field(() => Int, { nullable: true })
  intrastatTransportLocation?: number;

  @Field(() => String, { nullable: true })
  accountingCode?: string;

  @Field(() => String, { nullable: true })
  addressByDefault?: string;

  @Field(() => Int, { nullable: true })
  isMultiLineOrder?: number;

  @Field(() => String, { nullable: true })
  purchaseOrderTextKey?: string;

  @Field(() => String, { nullable: true })
  returnOrderTextKey?: string;

  @Field(() => DecimalJSScalar, { nullable: true })
  leadTimeRankingCoefficient?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  priceRankingCoefficient?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  qualityRankingCoefficient?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  quantityRankingCoefficient?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  freeRankingCoefficient?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  leadTimeRanking?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  priceRanking?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  qualityRanking?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  quantityRanking?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  freeRanking?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  totalRanking?: Prisma.Decimal;

  @Field(() => Int, { nullable: true })
  creditControl?: number;

  @Field(() => DecimalJSScalar, { nullable: true })
  minimumOrderAmount?: Prisma.Decimal;

  @Field(() => DecimalJSScalar, { nullable: true })
  intrastatIncreaseCoefficient?: Prisma.Decimal;

  @Field(() => String, { nullable: true })
  Notes?: string;

  @Field(() => Int, { nullable: true })
  dueDateOrigin?: number;

  @Field(() => Int, { nullable: true })
  currencyRateDetermination?: number;

  @Field(() => Int, { nullable: true })
  mustRemindDelivery?: number;

  @Field(() => Int, { nullable: true })
  mustRemindAcknowledgment?: number;

  @Field(() => Int, { nullable: true })
  isDas2Submitted?: number;

  @Field(() => String, { nullable: true })
  serviceSupplierCode?: string;

  @Field(() => Int, { nullable: true })
  disputeStatus?: number;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field(() => Int, { nullable: true })
  isPaymentHeld?: number;

  @Field(() => Int, { nullable: true })
  mustPrintOrderForm?: number;

  @Field(() => Int, { nullable: true })
  mustPrintReceiptNote?: number;

  @Field(() => Int, { nullable: true })
  mustPrintReturnSlip?: number;

  @Field(() => String, { nullable: true })
  ourCustomerNameForSupplier?: string;

  @Field(() => Int, { nullable: true })
  is281Submitted?: number;

  @Field(() => Int, { nullable: true })
  amountType?: number;

  @Field(() => Int, { nullable: true })
  isCashVat?: number;

  @Field(() => Date, { nullable: true })
  cashVatDeadline?: Date;

  @Field(() => String, { nullable: true })
  selfBillingCode?: string;

  @Field(() => String, { nullable: true })
  rexNumber?: string;

  @Field(() => Int, { nullable: true })
  hasNoWhiteListVerification?: number;

  @Field(() => Int, { nullable: true })
  isElectronicInvoice?: number;

  @Field(() => String, { nullable: true })
  contact?: string;

  @Field(() => GraphQLDate, { nullable: true })
  startDataElectronicInvoice?: Date;

  @Field(() => [AddressType], { nullable: true, description: 'List of addresses associated with the supplier' })
  addresses?: AddressType[];
}

@ObjectType({ description: 'Represents a paginated list of suppliers' })
export class SupplierPaginationType extends PaginationType(SupplierType) {}
