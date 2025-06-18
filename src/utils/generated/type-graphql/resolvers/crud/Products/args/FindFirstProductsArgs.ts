import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
import { ProductsScalarFieldEnum } from "../../../../enums/ProductsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "code" | "company" | "productStatisticalGroup1" | "productStatisticalGroup2" | "productStatisticalGroup3" | "productStatisticalGroup4" | "productStatisticalGroup5" | "productCategory" | "searchKey" | "dimensionType1" | "dimensionType2" | "dimensionType3" | "dimensionType4" | "dimensionType5" | "dimensionType6" | "dimensionType7" | "dimensionType8" | "dimensionType9" | "dimensionType10" | "dimensionType11" | "dimensionType12" | "dimensionType13" | "dimensionType14" | "dimensionType15" | "dimensionType16" | "dimensionType17" | "dimensionType18" | "dimensionType19" | "dimensionType20" | "dimension1" | "dimension2" | "dimension3" | "dimension4" | "dimension5" | "dimension6" | "dimension7" | "dimension8" | "dimension9" | "dimension10" | "dimension11" | "dimension12" | "dimension13" | "dimension14" | "dimension15" | "dimension16" | "dimension17" | "dimension18" | "dimension19" | "dimension20" | "accountingCode" | "description1" | "description2" | "description3" | "SELITMDES_0" | "managementMode" | "standard" | "upc" | "productStatus" | "isPrototype" | "defaultPotencyInPercentage" | "defaultPotencyInInternationalUnit" | "serviceLifeStartDate" | "serviceLifeEndDate" | "storageSheet" | "stockUnit" | "purchaseUnit" | "isPurchaseFactorEntryAllowed" | "purchaseUnitToStockUnitConversionFactor" | "salesUnit" | "salesUnitToStockUnitConversionFactor" | "isSalesFactorEntryAllowed" | "eeUnit" | "eeUnitToStockUnitConversionFactor" | "statisticalUnit" | "statisticalUnitToStockUnitConversionFactor" | "weightUnit" | "productWeight" | "volumeUnit" | "productVolume" | "packingUnit1" | "packingUnit2" | "packingUnit3" | "packingUnit4" | "packingUnitToStockUnitConversionFactor1" | "packingUnitToStockUnitConversionFactor2" | "packingUnitToStockUnitConversionFactor3" | "packingUnitToStockUnitConversionFactor4" | "isPackingFactorEntryAllowed1" | "isPackingFactorEntryAllowed2" | "isPackingFactorEntryAllowed3" | "isPackingFactorEntryAllowed4" | "issuingPackingRule1" | "issuingPackingRule2" | "issuingPackingRule3" | "issuingPackingRule4" | "labelFormat1" | "labelFormat2" | "labelFormat3" | "labelFormat4" | "stockManagementMode" | "lotManagementMode" | "lotSequenceNumber" | "serialSequenceNumber" | "serialNumberManagementMode" | "expirationManagementMode" | "expirationStockStatus" | "expirationLeadTime" | "checkLeadTime" | "isNegativeStockAuthorized" | "costGroup" | "materialCostGroup" | "userAccessCode" | "alternateProduct" | "isIntrastatDeclarationSubmitted" | "intrastatCommodity" | "taxLevel1" | "taxLevel2" | "taxLevel3" | "configuratorProductLine" | "FRTHORUOM_0" | "FRTHOR_0" | "FIMHOR_0" | "FIMHORUOM_0" | "BUY_0" | "PLANNER_0" | "OFS_0" | "PURBASPRI_0" | "CPRCOE_0" | "CPRAMT_0" | "STCNUM_0" | "MINRMNPRC_0" | "RCPFLG_0" | "PRQFLG_0" | "PURTEX_0" | "MFGTEX_0" | "ITMEXNFLG_0" | "STATAXFLG_0" | "CFGFLDNUM1_0" | "CFGFLDNUM2_0" | "CFGFLDNUM3_0" | "CFGFLDNUM4_0" | "CFGFLDNUM5_0" | "CFGFLDNUM6_0" | "CFGFLDALP1_0" | "CFGFLDALP2_0" | "CFGFLDALP3_0" | "CFGFLDALP4_0" | "CFGFLDALP5_0" | "CFGFLDALP6_0" | "CFGVCRNUM_0" | "CFGBPRNUM_0" | "CFGBPRREF_0" | "CFGITMREF_0" | "CFGDELDAT_0" | "CREMAC_0" | "FLYCAT_0" | "TPLCONLND_0" | "TPLCONGUA_0" | "TPLCONSRV_0" | "PITCDT_0" | "PITCDTUOM_0" | "STULBEFMT_0" | "ALTBOMHDK_0" | "HDKITMTYP_0" | "STOISSDEF_0" | "DAYUOM_0" | "HOUUOM_0" | "MNTUOM_0" | "DTY_0" | "TRKCOD_0" | "TRKLEV_0" | "PURFLG_0" | "MFGFLG_0" | "SCPFLG_0" | "SCSFLG_0" | "PHAFLG_0" | "GENFLG_0" | "TOOFLG_0" | "DLVFLG_0" | "SALFLG_0" | "INTFLG_0" | "FLGFAS_0" | "NEWLTISTA_0" | "DLU_0" | "SHLUOM_0" | "SHLLTIUOM_0" | "EXPNUM_0" | "STAFED_0" | "PLMITMREF_0" | "PLMATTURL_0" | "PLMHISURL_0" | "PCCCOD_0" | "MATTOL_0" | "SSTCOD_0" | "ALG_0" | "ALGDAT_0" | "ALGBOM_0" | "CREDAT_0" | "UPDDAT_0" | "CREUSR_0" | "UPDUSR_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "ITMSFTTYP_0" | "ECCFLG_0" | "ECCSTO_0" | "ECCMIN_0" | "ECCMAJ_0" | "ECCBOMALT2_0" | "ECCBOMALT2_1" | "ECCBOMALT3_0" | "ECCBOMALT3_1" | "LOAECCFLG_0" | "INVPRODTYP_0" | "ECCROUFLG_0" | "ECCROUALT_0" | "UNNBR_0" | "GTIN_0" | "YCBFLAG_0" | "YCBORIG_0" | "YCBINTS_0" | "YCBTYPE_0" | "ROWID"> | undefined;
}
