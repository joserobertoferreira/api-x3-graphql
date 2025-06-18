import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProductsSumAggregate", {})
export class ProductsSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SELITMDES_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  managementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  productStatus!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPrototype!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  defaultPotencyInPercentage!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  defaultPotencyInInternationalUnit!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPurchaseFactorEntryAllowed!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  purchaseUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSalesFactorEntryAllowed!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  eeUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  statisticalUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productWeight!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productVolume!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor1!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor2!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor3!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor4!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stockManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lotManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  serialNumberManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationLeadTime!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  checkLeadTime!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isNegativeStockAuthorized!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  materialCostGroup!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntrastatDeclarationSubmitted!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FRTHORUOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FRTHOR_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FIMHOR_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FIMHORUOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OFS_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PURBASPRI_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CPRCOE_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CPRAMT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  MINRMNPRC_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  RCPFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PRQFLG_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM1_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM2_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM3_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM4_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM5_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM6_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CREMAC_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PITCDT_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALTBOMHDK_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  HDKITMTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  STOISSDEF_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DTY_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TRKCOD_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TRKLEV_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PURFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  MFGFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SCPFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SCSFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PHAFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GENFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TOOFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SALFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  INTFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FLGFAS_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DLU_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SHLUOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SHLLTIUOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALGBOM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ITMSFTTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCSTO_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT2_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT2_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT3_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT3_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  LOAECCFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  INVPRODTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCROUFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCROUALT_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YCBFLAG_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  YCBINTS_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YCBTYPE_0!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
