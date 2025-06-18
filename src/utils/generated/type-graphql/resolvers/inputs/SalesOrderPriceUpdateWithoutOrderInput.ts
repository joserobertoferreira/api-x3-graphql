import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutSalesOrderPricesNestedInput } from "../inputs/ProductsUpdateOneWithoutSalesOrderPricesNestedInput";
import { SalesOrderLineUpdateOneWithoutPriceNestedInput } from "../inputs/SalesOrderLineUpdateOneWithoutPriceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SalesOrderPriceUpdateWithoutOrderInput", {})
export class SalesOrderPriceUpdateWithoutOrderInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  UPDTICK_0?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lineNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  sequenceNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  company?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  STRDAT_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  ENDDAT_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  soldToCustomer?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shipToCustomerAddress?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shipToCustomerContact?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  billToCustomer?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shippingSite?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salesSite?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productDescriptionInUserLanguage?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productDescriptionInCustomerLanguage?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  customerProduct?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  taxLevel1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  taxLevel2?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  taxLevel3?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salesRep1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salesRep2?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  salesRep1CommissionRate1?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  salesRep1CommissionRate2?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  salesRepCommissionFactor?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  grossPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  priceReason?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  netPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  netPriceExcludingTax?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  netPriceIncludingTax?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  margin?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  costPrice?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge1?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge2?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge3?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge4?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge5?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge6?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge7?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge8?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrCharge9?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason1?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason2?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason3?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason4?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason5?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason6?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason7?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason8?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discountOrChargeReason9?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax2?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax3?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  calculatedTaxableBase1?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  calculatedTaxableBase2?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salesUnit?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stockUnit?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productStatisticalGroup1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productStatisticalGroup2?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productStatisticalGroup3?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productStatisticalGroup4?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  productStatisticalGroup5?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lineStatus?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lineType?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  freeProduct?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  freeProductLineSource?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salesQuote?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  salesQuoteLineNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  CONNUM_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  LINREVNUM_0?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  EXPNUM_0?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  SSTCOD_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  BPCSALPRI_0?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CREDAT_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  UPDDAT_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  CREUSR_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  UPDUSR_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CREDATTIM_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  UPDDATTIM_0?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  AUUID_0?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  INVCND_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  PCNTNUM_0?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  ROWID?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateOneWithoutPriceNestedInput, {
    nullable: true
  })
  line?: SalesOrderLineUpdateOneWithoutPriceNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutSalesOrderPricesNestedInput, {
    nullable: true
  })
  productDetails?: ProductsUpdateOneWithoutSalesOrderPricesNestedInput | undefined;
}
