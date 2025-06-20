import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsAvgAggregate } from "../outputs/ProductsAvgAggregate";
import { ProductsCountAggregate } from "../outputs/ProductsCountAggregate";
import { ProductsMaxAggregate } from "../outputs/ProductsMaxAggregate";
import { ProductsMinAggregate } from "../outputs/ProductsMinAggregate";
import { ProductsSumAggregate } from "../outputs/ProductsSumAggregate";

@TypeGraphQL.ObjectType("ProductsGroupBy", {})
export class ProductsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  company!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productCategory!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  searchKey!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimensionType20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension10!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension11!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension12!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension13!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension14!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension15!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension16!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension17!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension18!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension19!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dimension20!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accountingCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description3!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SELITMDES_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  managementMode!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  standard!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  upc!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  productStatus!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPrototype!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  defaultPotencyInPercentage!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  defaultPotencyInInternationalUnit!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  serviceLifeStartDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  serviceLifeEndDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  storageSheet!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stockUnit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  purchaseUnit!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPurchaseFactorEntryAllowed!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  purchaseUnitToStockUnitConversionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salesUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  salesUnitToStockUnitConversionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isSalesFactorEntryAllowed!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  eeUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  eeUnitToStockUnitConversionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statisticalUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  statisticalUnitToStockUnitConversionFactor!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  weightUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  productWeight!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  volumeUnit!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  productVolume!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  packingUnit1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  packingUnit2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  packingUnit3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  packingUnit4!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  packingUnitToStockUnitConversionFactor1!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  packingUnitToStockUnitConversionFactor2!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  packingUnitToStockUnitConversionFactor3!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  packingUnitToStockUnitConversionFactor4!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPackingFactorEntryAllowed1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPackingFactorEntryAllowed2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPackingFactorEntryAllowed3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPackingFactorEntryAllowed4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  issuingPackingRule1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  issuingPackingRule2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  issuingPackingRule3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  issuingPackingRule4!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelFormat1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelFormat2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelFormat3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelFormat4!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stockManagementMode!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lotManagementMode!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lotSequenceNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serialSequenceNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  serialNumberManagementMode!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  expirationManagementMode!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  expirationStockStatus!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  expirationLeadTime!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  checkLeadTime!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isNegativeStockAuthorized!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  costGroup!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  materialCostGroup!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userAccessCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alternateProduct!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isIntrastatDeclarationSubmitted!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  intrastatCommodity!: string;

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
  configuratorProductLine!: string;

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FRTHORUOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FRTHOR_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FIMHOR_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FIMHORUOM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BUY_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PLANNER_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OFS_0!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PURBASPRI_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CPRCOE_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CPRAMT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STCNUM_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  MINRMNPRC_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RCPFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PRQFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PURTEX_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MFGTEX_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ITMEXNFLG_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STATAXFLG_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM1_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM2_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM3_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM4_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM5_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  CFGFLDNUM6_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP1_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP2_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP3_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP4_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP5_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGFLDALP6_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGVCRNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGBPRNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGBPRREF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CFGITMREF_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CFGDELDAT_0!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CREMAC_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FLYCAT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TPLCONLND_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TPLCONGUA_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TPLCONSRV_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PITCDT_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PITCDTUOM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STULBEFMT_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ALTBOMHDK_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  HDKITMTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  STOISSDEF_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DAYUOM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  HOUUOM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MNTUOM_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DTY_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TRKCOD_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TRKLEV_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PURFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  MFGFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SCPFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SCSFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PHAFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GENFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TOOFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DLVFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SALFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  INTFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FLGFAS_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  NEWLTISTA_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  DLU_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SHLUOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SHLLTIUOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EXPNUM_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STAFED_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PLMITMREF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PLMATTURL_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PLMHISURL_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PCCCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MATTOL_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SSTCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ALG_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  ALGDAT_0!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ALGBOM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ITMSFTTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCSTO_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ECCMIN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ECCMAJ_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCBOMALT2_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCBOMALT2_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCBOMALT3_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCBOMALT3_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  LOAECCFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  INVPRODTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCROUFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ECCROUALT_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UNNBR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GTIN_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  YCBFLAG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  YCBORIG_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  YCBINTS_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  YCBTYPE_0!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => ProductsCountAggregate, {
    nullable: true
  })
  _count!: ProductsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductsAvgAggregate, {
    nullable: true
  })
  _avg!: ProductsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductsSumAggregate, {
    nullable: true
  })
  _sum!: ProductsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMinAggregate, {
    nullable: true
  })
  _min!: ProductsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductsMaxAggregate, {
    nullable: true
  })
  _max!: ProductsMaxAggregate | null;
}
