import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";
import { SalesOrder } from "../models/SalesOrder";
import { SalesOrderPrice } from "../models/SalesOrderPrice";

@TypeGraphQL.ObjectType("SalesOrderLine", {})
export class SalesOrderLine {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesSite!: string;

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
  product!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  majorProductVersion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  minorProductVersion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shippingSite!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  locationReference!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  orderDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  requestedDeliveryDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  requestedDeliveryTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  requestedDeliveryReference!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  latestDeliveryTime!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  latestDeliveryDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shipmentDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipmentTime!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expectedDeliveryDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isInvoiced!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  workInProgressStatus!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  workInProgressNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  productStockManagement!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitInitiallyOrdered!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitOrdered!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitShortage!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitAllocated!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitOnDeliveryOrScheduledInvoice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitDelivered!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  quantityInSalesUnitInvoiced!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CAD_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  YEA_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  MON_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVDAY_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  WEE_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  IMPNUMLIG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  LOT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STA_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  LOC_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ALLTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DSPLINFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DDTANUM_8!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_3!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_4!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_5!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_6!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_7!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DDTANOT_8!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  TDLQTY_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  LPRQTY_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  OPRQTY_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PREQTY_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  QTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  SHTQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  ALLQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  ODLQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DLVQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INVQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  TDLQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  LPRQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  OPRQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PREQTYSTU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PRECOD_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DRN_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVPIO_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVPIOCMP_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BPTNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MDL_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DAYLTI_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PCK_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PCKCAP_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SOQTEX_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SDHNUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SDDLIN_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FMI_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FMINUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FMILIN_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FMISEQ_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  POHNUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  POPLIN_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  POQSEQ_0!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  PERSTRDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  PERENDDAT_0!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PERNBRDAY_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEOCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  INSCTYFLG_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  VTS_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  VTC_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TAXGEOFLG_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TAXFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TAXREGFLG_0!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  RATTAXLIN_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  BASTAXLIN_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OCNPRNBOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  NDEPRNBOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  INVPRNBOM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CCLREN_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CCLDAT_0!: Date;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PITFLG_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DSPLINWEI_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DSPLINVOL_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DSPWEU_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DSPVOU_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PJT_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  LINORDNUM_0!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  USELIMDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CREDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CREUSR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UPDUSR_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CREDATTIM_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UPDDATTIM_0!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  AUUID_0!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVFLG_0!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  INVAMT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SOQPSONUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SOQSEQNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PRGBILNUM_0!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  order?: SalesOrder | null;

  price?: SalesOrderPrice | null;

  productDetails?: Products | null;
}
