import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SiteMaxAggregate", {})
export class SiteMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  standardName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shortName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legalCompany!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legislation!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  defaultAddress!: string | null;

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
  createUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  singleID!: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CRN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  NAF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BPTNUM_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  MFGFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SALFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PURFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  WRHFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FINFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FINRSPFCY_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DADFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PAYBAN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BIDNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CNTNAM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DADFCY_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ACCCOD_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PEREST_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  EORINUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEOCOD_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ORICERFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  REXNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  INSCTYFLG_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UVYDAY_6!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UVYCOD_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  IVYFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  IVYFCY_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  WRHGES_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RCPWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MFPWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TRAWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RTNWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MFRWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SHIWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MFGWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TRFWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SCOWRH_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SCCWRH_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SPAOPEIGIC_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STRHOU_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  XDFR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ENDHOU_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PAYFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  HRMDADFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HRMDADFCY_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BPASGE_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BPADCL_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CNTDDS_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CODCRA_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  REGPRH_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PRF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SRV_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CLLCVT_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RSKWRK_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HRMPAYBAN_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  HRMTAXWAG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SECPRH_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FLGAPP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FLGFOR_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FLGPEC_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZTAXREF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CHEF_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RTGCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ELCADD_0!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
