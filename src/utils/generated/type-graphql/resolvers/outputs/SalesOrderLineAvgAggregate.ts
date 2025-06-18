import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SalesOrderLineAvgAggregate", {})
export class SalesOrderLineAvgAggregate {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lineStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  isInvoiced!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  workInProgressStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  productStockManagement!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitInitiallyOrdered!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitOrdered!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitShortage!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitAllocated!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitOnDeliveryOrScheduledInvoice!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitDelivered!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantityInSalesUnitInvoiced!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  CAD_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  YEA_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  MON_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DLVDAY_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  WEE_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  IMPNUMLIG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  ALLTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DSPLINFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DDTANUM_8!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_3!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_4!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_5!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_6!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_7!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DDTANOT_8!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  TDLQTY_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  LPRQTY_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  OPRQTY_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PREQTY_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  QTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  SHTQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  ALLQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  ODLQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DLVQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INVQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  TDLQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  LPRQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  OPRQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PREQTYSTU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DRN_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DLVPIO_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DLVPIOCMP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DAYLTI_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PCKCAP_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  SDDLIN_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  FMI_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  FMILIN_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  FMISEQ_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  POPLIN_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  POQSEQ_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  PERNBRDAY_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  TAXFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  TAXREGFLG_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  RATTAXLIN_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  BASTAXLIN_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  OCNPRNBOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  NDEPRNBOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  INVPRNBOM_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PITFLG_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DSPLINWEI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DSPLINVOL_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  LINORDNUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  DLVFLG_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  INVAMT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  SOQSEQNUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  ROWID!: number | null;
}
