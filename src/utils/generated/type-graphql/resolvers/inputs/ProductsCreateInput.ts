import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineCreateNestedManyWithoutProductDetailsInput } from "../inputs/SalesOrderLineCreateNestedManyWithoutProductDetailsInput";
import { SalesOrderPriceCreateNestedManyWithoutProductDetailsInput } from "../inputs/SalesOrderPriceCreateNestedManyWithoutProductDetailsInput";

@TypeGraphQL.InputType("ProductsCreateInput", {})
export class ProductsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productCategory?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchKey?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensionType20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension10?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension11?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension12?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension13?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension14?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension15?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension16?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension17?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension18?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension19?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimension20?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountingCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description3?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SELITMDES_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  managementMode?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  standard?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  upc?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  productStatus?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPrototype?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  defaultPotencyInPercentage?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  defaultPotencyInInternationalUnit?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  serviceLifeStartDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  serviceLifeEndDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  storageSheet?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stockUnit?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  purchaseUnit?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPurchaseFactorEntryAllowed?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  purchaseUnitToStockUnitConversionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salesUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  salesUnitToStockUnitConversionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isSalesFactorEntryAllowed?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eeUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  eeUnitToStockUnitConversionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statisticalUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  statisticalUnitToStockUnitConversionFactor?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weightUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productWeight?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  volumeUnit?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  productVolume?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  packingUnit4?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor1?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor2?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor3?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  packingUnitToStockUnitConversionFactor4?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isPackingFactorEntryAllowed4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  issuingPackingRule4?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labelFormat4?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stockManagementMode?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lotManagementMode?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lotSequenceNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serialSequenceNumber?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  serialNumberManagementMode?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationManagementMode?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expirationStockStatus?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expirationLeadTime?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  checkLeadTime?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isNegativeStockAuthorized?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  costGroup?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  materialCostGroup?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userAccessCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alternateProduct?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isIntrastatDeclarationSubmitted?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  intrastatCommodity?: string | undefined;

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
  configuratorProductLine?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  singleID?: Buffer | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FRTHORUOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FRTHOR_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FIMHOR_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FIMHORUOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BUY_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLANNER_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OFS_0?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PURBASPRI_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CPRCOE_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CPRAMT_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STCNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  MINRMNPRC_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  RCPFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PRQFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PURTEX_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MFGTEX_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ITMEXNFLG_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STATAXFLG_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM1_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM2_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM3_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM4_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM5_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  CFGFLDNUM6_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP1_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP2_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP3_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP4_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP5_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGFLDALP6_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGVCRNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGBPRNUM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGBPRREF_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CFGITMREF_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CFGDELDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CREMAC_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FLYCAT_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONLND_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONGUA_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TPLCONSRV_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PITCDT_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PITCDTUOM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STULBEFMT_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALTBOMHDK_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  HDKITMTYP_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  STOISSDEF_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DAYUOM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOUUOM_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MNTUOM_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DTY_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TRKCOD_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TRKLEV_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PURFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  MFGFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SCPFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SCSFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PHAFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GENFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TOOFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DLVFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SALFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  INTFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FLGFAS_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  NEWLTISTA_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  DLU_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SHLUOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SHLLTIUOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EXPNUM_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STAFED_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMITMREF_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMATTURL_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLMHISURL_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PCCCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MATTOL_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SSTCOD_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ALG_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ALGDAT_0?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ALGBOM_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ITMSFTTYP_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCSTO_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ECCMIN_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ECCMAJ_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT2_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT2_1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT3_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCBOMALT3_1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  LOAECCFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  INVPRODTYP_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCROUFLG_0?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ECCROUALT_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UNNBR_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GTIN_0?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YCBFLAG_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  YCBORIG_0?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  YCBINTS_0?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  YCBTYPE_0?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateNestedManyWithoutProductDetailsInput, {
    nullable: true
  })
  salesOrderLines?: SalesOrderLineCreateNestedManyWithoutProductDetailsInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateNestedManyWithoutProductDetailsInput, {
    nullable: true
  })
  salesOrderPrices?: SalesOrderPriceCreateNestedManyWithoutProductDetailsInput | undefined;
}
