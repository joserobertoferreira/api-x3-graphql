import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Company } from "../models/Company";

@TypeGraphQL.ObjectType("Site", {})
export class Site {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  standardName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shortName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legalCompany!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legislation!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  defaultAddress!: string;

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
  createUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CRN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  NAF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BPTNUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  MFGFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SALFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PURFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  WRHFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FINFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FINRSPFCY_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DADFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PAYBAN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BIDNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CNTNAM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DADFCY_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ACCCOD_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PEREST_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  EORINUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEOCOD_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ORICERFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  REXNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  INSCTYFLG_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UVYDAY_6!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  UVYCOD_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  IVYFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  IVYFCY_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  WRHGES_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RCPWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MFPWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TRAWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RTNWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MFRWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SHIWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MFGWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TRFWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SCOWRH_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SCCWRH_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SPAOPEIGIC_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STRHOU_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  XDFR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ENDHOU_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PAYFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  HRMDADFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  HRMDADFCY_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BPASGE_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BPADCL_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CNTDDS_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CODCRA_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  REGPRH_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PRF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SRV_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CLLCVT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RSKWRK_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  HRMPAYBAN_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  HRMTAXWAG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SECPRH_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FLGAPP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FLGFOR_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FLGPEC_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ZTAXREF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CHEF_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RTGCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ELCADD_0!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  company?: Company | null;
}
