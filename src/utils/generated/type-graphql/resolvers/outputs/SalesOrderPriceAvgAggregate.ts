import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SalesOrderPriceAvgAggregate", {})
export class SalesOrderPriceAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lineNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  sequenceNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  category!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRep1CommissionRate1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRep1CommissionRate2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRepCommissionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  grossPrice!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  priceReason!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPrice!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPriceExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPriceIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  margin!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  costPrice!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge3!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge4!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge5!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge6!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge7!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge8!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge9!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  discountOrChargeReason9!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  calculatedTaxableBase1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  calculatedTaxableBase2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lineStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lineType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  freeProduct!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  freeProductLineSource!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  salesQuoteLineNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  LINREVNUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  BPCSALPRI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  ROWID!: number | null;
}
