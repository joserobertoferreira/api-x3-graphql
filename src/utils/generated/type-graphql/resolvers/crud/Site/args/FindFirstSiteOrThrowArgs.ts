import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteOrderByWithRelationInput } from "../../../inputs/SiteOrderByWithRelationInput";
import { SiteWhereInput } from "../../../inputs/SiteWhereInput";
import { SiteWhereUniqueInput } from "../../../inputs/SiteWhereUniqueInput";
import { SiteScalarFieldEnum } from "../../../../enums/SiteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSiteOrThrowArgs {
  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  where?: SiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SiteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SiteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: true
  })
  cursor?: SiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SiteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "siteCode" | "standardName" | "shortName" | "siteName" | "country" | "legalCompany" | "legislation" | "defaultAddress" | "dimensionType1" | "dimensionType2" | "dimensionType3" | "dimensionType4" | "dimensionType5" | "dimensionType6" | "dimensionType7" | "dimensionType8" | "dimensionType9" | "dimensionType10" | "dimensionType11" | "dimensionType12" | "dimensionType13" | "dimensionType14" | "dimensionType15" | "dimensionType16" | "dimensionType17" | "dimensionType18" | "dimensionType19" | "dimensionType20" | "dimension1" | "dimension2" | "dimension3" | "dimension4" | "dimension5" | "dimension6" | "dimension7" | "dimension8" | "dimension9" | "dimension10" | "dimension11" | "dimension12" | "dimension13" | "dimension14" | "dimension15" | "dimension16" | "dimension17" | "dimension18" | "dimension19" | "dimension20" | "createUser" | "createDate" | "updateUser" | "updateDate" | "createDatetime" | "updateDatetime" | "singleID" | "CRN_0" | "NAF_0" | "BPTNUM_0" | "MFGFLG_0" | "SALFLG_0" | "PURFLG_0" | "WRHFLG_0" | "FINFLG_0" | "FINRSPFCY_0" | "DADFLG_0" | "PAYBAN_0" | "BIDNUM_0" | "CNTNAM_0" | "DADFCY_0" | "ACCCOD_0" | "PEREST_0" | "EORINUM_0" | "GEOCOD_0" | "ORICERFLG_0" | "REXNUM_0" | "INSCTYFLG_0" | "UVYDAY_0" | "UVYDAY_1" | "UVYDAY_2" | "UVYDAY_3" | "UVYDAY_4" | "UVYDAY_5" | "UVYDAY_6" | "UVYCOD_0" | "IVYFLG_0" | "IVYFCY_0" | "WRHGES_0" | "RCPWRH_0" | "MFPWRH_0" | "TRAWRH_0" | "RTNWRH_0" | "MFRWRH_0" | "SHIWRH_0" | "MFGWRH_0" | "TRFWRH_0" | "SCOWRH_0" | "SCCWRH_0" | "SPAOPEIGIC_0" | "STRHOU_0" | "XDFR_0" | "ENDHOU_0" | "PAYFLG_0" | "HRMDADFLG_0" | "HRMDADFCY_0" | "BPASGE_0" | "BPADCL_0" | "CNTDDS_0" | "CODCRA_0" | "REGPRH_0" | "PRF_0" | "SRV_0" | "CLLCVT_0" | "RSKWRK_0" | "HRMPAYBAN_0" | "HRMTAXWAG_0" | "SECPRH_0" | "FLGAPP_0" | "FLGFOR_0" | "FLGPEC_0" | "ZTAXREF_0" | "CHEF_0" | "RTGCOD_0" | "ELCADD_0" | "ROWID"> | undefined;
}
