import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutSalesOrderPricesInput } from "../inputs/ProductsCreateNestedOneWithoutSalesOrderPricesInput";
import { SalesOrderCreateNestedOneWithoutOrderPricesInput } from "../inputs/SalesOrderCreateNestedOneWithoutOrderPricesInput";

@TypeGraphQL.InputType("SalesOrderPriceCreateWithoutLineInput", {})
export class SalesOrderPriceCreateWithoutLineInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineNumber?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sequenceNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  STRDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ENDDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  soldToCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipToCustomerContact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billToCustomer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingSite?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesSite?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productDescriptionInUserLanguage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productDescriptionInCustomerLanguage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customerProduct?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesRep2?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRep1CommissionRate1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRep1CommissionRate2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesRepCommissionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  grossPrice?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priceReason?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPrice?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPriceExcludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  netPriceIncludingTax?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  margin?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  costPrice?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge3?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge4?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge5?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge6?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge7?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge8?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  discountOrCharge9?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  discountOrChargeReason9?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax3?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  calculatedTaxableBase1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  calculatedTaxableBase2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesUnit?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stockUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup5?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineType?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  freeProduct?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  freeProductLineSource?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesQuote?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  salesQuoteLineNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CONNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  LINREVNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SSTCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  BPCSALPRI_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CREUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UPDUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  AUUID_0?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  INVCND_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PCNTNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateNestedOneWithoutOrderPricesInput, {
    nullable: true
  })
  order?: SalesOrderCreateNestedOneWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutSalesOrderPricesInput, {
    nullable: true
  })
  productDetails?: ProductsCreateNestedOneWithoutSalesOrderPricesInput | undefined;
}
