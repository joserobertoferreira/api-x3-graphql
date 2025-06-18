import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SalesOrderSumAggregate", {})
export class SalesOrderSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryLeadTime!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currencyRateType!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  currencyRate!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  routeNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryPriority!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isOrderClosingAllowed!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustContainOneOrderPerDelivery!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  partialDelivery!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  mustPrintAcknowledgment!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isAcknowledgmentPrinted!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfAcknowledgmentCopies!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntersite!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntercompany!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount3!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount4!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount5!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount6!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount7!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount8!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount9!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount10!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount11!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount12!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount13!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount14!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount15!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount16!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount17!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount18!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount19!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount20!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount21!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount22!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount23!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount24!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount25!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount26!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount27!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount28!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount29!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  percentageOrAmount30!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType19!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType20!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType21!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType22!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType23!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType24!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType25!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType26!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType27!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType28!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType29!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  valueType30!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement19!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement20!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement21!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement22!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement23!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement24!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement25!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement26!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement27!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement28!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement29!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElement30!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceIncludingOrExcludingTax!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountExcludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalAmountIncludingTaxInCompanyCurrency!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverExcludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  linesAmountRemainingToDeliverIncludingTax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalMargin!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeCalculationRules9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicingElementLine9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isUnlocked!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfClosedLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfLinesToAllocate!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfDeliveredLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfInvoicedLines!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  allocationStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoicedStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creditLevelStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  signatureStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  revisionNumber!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  intrastatTransportLocation!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  taxableAmount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalQuantityDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalWeightDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  totalVolumeDistributedOnLines!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  manualHoldStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  previousCreditLevelStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isValidatedAddress!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  XDADVGRO_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRNOT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRATI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHNOT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INRSCHATI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTSTATUS_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRAFTREJ_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SOHCFMFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
