import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProductsMaxAggregate", {})
export class ProductsMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productStatisticalGroup5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productCategory!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchKey!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description3!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SELITMDES_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  managementMode!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  standard!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  upc!: string | null;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  serviceLifeStartDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  serviceLifeEndDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  storageSheet!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stockUnit!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  purchaseUnit!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPurchaseFactorEntryAllowed!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  purchaseUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSalesFactorEntryAllowed!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eeUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  eeUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  statisticalUnitToStockUnitConversionFactor!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weightUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productWeight!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeUnit!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productVolume!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit4!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat4!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stockManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lotManagementMode!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lotSequenceNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serialSequenceNumber!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  serialNumberManagementMode!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationManagementMode!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expirationStockStatus!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  costGroup!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  materialCostGroup!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userAccessCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alternateProduct!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntrastatDeclarationSubmitted!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  intrastatCommodity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxLevel3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  configuratorProductLine!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BUY_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLANNER_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STCNUM_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PURTEX_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MFGTEX_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ITMEXNFLG_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STATAXFLG_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP1_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP2_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP3_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP4_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP5_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP6_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGVCRNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGBPRNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGBPRREF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGITMREF_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CFGDELDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CREMAC_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FLYCAT_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONLND_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONGUA_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONSRV_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PITCDT_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PITCDTUOM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STULBEFMT_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DAYUOM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOUUOM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MNTUOM_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  NEWLTISTA_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STAFED_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMITMREF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMATTURL_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMHISURL_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PCCCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MATTOL_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SSTCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ALG_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ALGDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALGBOM_0!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CREUSR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UPDUSR_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDATTIM_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDATTIM_0!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  AUUID_0!: Buffer | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ECCMIN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ECCMAJ_0!: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UNNBR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GTIN_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YCBFLAG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YCBORIG_0!: string | null;

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
