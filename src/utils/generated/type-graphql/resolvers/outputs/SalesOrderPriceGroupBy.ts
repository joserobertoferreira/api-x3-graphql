import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceAvgAggregate } from "../outputs/SalesOrderPriceAvgAggregate";
import { SalesOrderPriceCountAggregate } from "../outputs/SalesOrderPriceCountAggregate";
import { SalesOrderPriceMaxAggregate } from "../outputs/SalesOrderPriceMaxAggregate";
import { SalesOrderPriceMinAggregate } from "../outputs/SalesOrderPriceMinAggregate";
import { SalesOrderPriceSumAggregate } from "../outputs/SalesOrderPriceSumAggregate";

@TypeGraphQL.ObjectType("SalesOrderPriceGroupBy", {})
export class SalesOrderPriceGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesOrder!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sequenceNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  company!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  category!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  STRDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  ENDDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  soldToCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipToCustomerContact!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  billToCustomer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shippingSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productDescriptionInUserLanguage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productDescriptionInCustomerLanguage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customerProduct!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxLevel1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxLevel2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxLevel3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesRep2!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesRep1CommissionRate1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesRep1CommissionRate2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesRepCommissionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  grossPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priceReason!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  netPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  netPriceExcludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  netPriceIncludingTax!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  margin!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  costPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge3!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge4!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge5!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge6!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge7!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge8!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountOrCharge9!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discountOrChargeReason9!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax3!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  calculatedTaxableBase1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  calculatedTaxableBase2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesUnit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stockUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesUnitToStockUnitConversionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productStatisticalGroup1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productStatisticalGroup2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productStatisticalGroup3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productStatisticalGroup4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productStatisticalGroup5!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  freeProduct!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  freeProductLineSource!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesQuote!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  salesQuoteLineNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDatetime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDatetime!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  singleID!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CONNUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  LINREVNUM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SSTCOD_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  BPCSALPRI_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  INVCND_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PCNTNUM_0!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => SalesOrderPriceCountAggregate, {
    nullable: true
  })
  _count!: SalesOrderPriceCountAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceAvgAggregate, {
    nullable: true
  })
  _avg!: SalesOrderPriceAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceSumAggregate, {
    nullable: true
  })
  _sum!: SalesOrderPriceSumAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceMinAggregate, {
    nullable: true
  })
  _min!: SalesOrderPriceMinAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceMaxAggregate, {
    nullable: true
  })
  _max!: SalesOrderPriceMaxAggregate | null;
}
