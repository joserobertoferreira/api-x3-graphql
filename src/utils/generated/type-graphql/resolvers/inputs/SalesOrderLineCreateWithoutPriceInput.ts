import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutSalesOrderLinesInput } from "../inputs/ProductsCreateNestedOneWithoutSalesOrderLinesInput";
import { SalesOrderCreateNestedOneWithoutOrderLinesInput } from "../inputs/SalesOrderCreateNestedOneWithoutOrderLinesInput";

@TypeGraphQL.InputType("SalesOrderLineCreateWithoutPriceInput", {})
export class SalesOrderLineCreateWithoutPriceInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesSite?: string | undefined;

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
  majorProductVersion?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  minorProductVersion?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingSite?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  locationReference?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  orderDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  requestedDeliveryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requestedDeliveryTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requestedDeliveryReference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  latestDeliveryTime?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  latestDeliveryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shipmentDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipmentTime?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expectedDeliveryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lineStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isInvoiced?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  workInProgressStatus?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  workInProgressNumber?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  productStockManagement?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitInitiallyOrdered?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitOrdered?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitShortage?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitAllocated?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitOnDeliveryOrScheduledInvoice?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitDelivered?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitInvoiced?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CAD_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YEA_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  MON_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVDAY_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  WEE_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  IMPNUMLIG_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  LOT_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STA_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  LOC_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALLTYP_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DSPLINFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DDTANUM_8?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_3?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_4?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_5?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_6?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_7?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_8?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  TDLQTY_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  LPRQTY_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  OPRQTY_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PREQTY_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  QTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  SHTQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  ALLQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  ODLQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DLVQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INVQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  TDLQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  LPRQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  OPRQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PREQTYSTU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PRECOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DRN_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVPIO_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVPIOCMP_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BPTNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MDL_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DAYLTI_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PCK_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PCKCAP_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SOQTEX_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SDHNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SDDLIN_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FMI_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FMINUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FMILIN_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FMISEQ_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  POHNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  POPLIN_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  POQSEQ_0?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  PERSTRDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  PERENDDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PERNBRDAY_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEOCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  INSCTYFLG_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  VTS_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  VTC_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TAXGEOFLG_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TAXFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TAXREGFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  RATTAXLIN_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  BASTAXLIN_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OCNPRNBOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  NDEPRNBOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  INVPRNBOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CCLREN_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CCLDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PITFLG_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DSPLINWEI_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DSPLINVOL_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DSPWEU_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DSPVOU_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PJT_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  LINORDNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  USELIMDAT_0?: Date | undefined;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INVAMT_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SOQPSONUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SOQSEQNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PRGBILNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateNestedOneWithoutOrderLinesInput, {
    nullable: true
  })
  order?: SalesOrderCreateNestedOneWithoutOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutSalesOrderLinesInput, {
    nullable: true
  })
  productDetails?: ProductsCreateNestedOneWithoutSalesOrderLinesInput | undefined;
}
