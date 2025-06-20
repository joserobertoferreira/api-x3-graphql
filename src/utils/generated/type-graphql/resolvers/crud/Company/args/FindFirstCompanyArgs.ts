import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyOrderByWithRelationInput } from "../../../inputs/CompanyOrderByWithRelationInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";
import { CompanyScalarFieldEnum } from "../../../../enums/CompanyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompanyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CompanyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  cursor?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "company" | "standardName" | "shortName" | "companyName" | "isLegalCompany" | "legislation" | "defaultAddress" | "dimensionType1" | "dimensionType2" | "dimensionType3" | "dimensionType4" | "dimensionType5" | "dimensionType6" | "dimensionType7" | "dimensionType8" | "dimensionType9" | "dimensionType10" | "dimensionType11" | "dimensionType12" | "dimensionType13" | "dimensionType14" | "dimensionType15" | "dimensionType16" | "dimensionType17" | "dimensionType18" | "dimensionType19" | "dimensionType20" | "dimension1" | "dimension2" | "dimension3" | "dimension4" | "dimension5" | "dimension6" | "dimension7" | "dimension8" | "dimension9" | "dimension10" | "dimension11" | "dimension12" | "dimension13" | "dimension14" | "dimension15" | "dimension16" | "dimension17" | "dimension18" | "dimension19" | "dimension20" | "createUser" | "createDate" | "updateUser" | "updateDate" | "createDatetime" | "updateDatetime" | "singleID" | "ACM_0" | "MAIFCY_0" | "CRY_0" | "CRN_0" | "NAF_0" | "NID_0" | "CPYLOG_0" | "RGCAMT_0" | "RGCCUR_0" | "CNTNAM_0" | "BIDNUM_0" | "ACCCOD_0" | "DIVCOD_0" | "EECNUM_0" | "FDRX3_0" | "STRPER_0" | "ACCCUR_0" | "KACT_0" | "NUMADD_0" | "ORICERFLG_0" | "EORINUM_0" | "OBYDIE_0" | "OBYDIE_1" | "OBYDIE_2" | "OBYDIE_3" | "OBYDIE_4" | "OBYDIE_5" | "OBYDIE_6" | "OBYDIE_7" | "OBYDIE_8" | "OBYDIE_9" | "OBYDIE_10" | "OBYDIE_11" | "OBYDIE_12" | "OBYDIE_13" | "OBYDIE_14" | "OBYDIE_15" | "OBYDIE_16" | "OBYDIE_17" | "OBYDIE_18" | "OBYDIE_19" | "REXNUM_0" | "STAFED_0" | "DACDIE_0" | "DACDIE_1" | "DACDIE_2" | "DACDIE_3" | "DACDIE_4" | "DACDIE_5" | "DACDIE_6" | "DACDIE_7" | "DACDIE_8" | "DACDIE_9" | "DACDIE_10" | "DACDIE_11" | "DACDIE_12" | "DACDIE_13" | "DACDIE_14" | "DACDIE_15" | "DACDIE_16" | "DACDIE_17" | "DACDIE_18" | "DACDIE_19" | "GRUCOD_0" | "PLISTC_0" | "RTZFLG_0" | "AGTPCP_0" | "VACCPY_0" | "DCLDIRBALPAY_0" | "BDFECOCOD_0" | "AUSFINSRV_0" | "GERDEFVAL_0" | "GERDEFVAL_1" | "GERDEFVAL_2" | "GERDEFVAL_3" | "GERDEFVAL_4" | "GERDEFVAL_5" | "GERDEFVAL_6" | "GERDEFVAL_7" | "GEREECNUM_0" | "GEREECNUM_1" | "GEREECNUM_2" | "GEREECNUM_3" | "GEREECNUM_4" | "GEREECNUM_5" | "GEREECNUM_6" | "GEREECNUM_7" | "GERTAXCEN_0" | "GERTAXCEN_1" | "GERTAXCEN_2" | "GERTAXCEN_3" | "GERTAXCEN_4" | "GERTAXCEN_5" | "GERTAXCEN_6" | "GERTAXCEN_7" | "GERTAXIDT_0" | "GERTAXIDT_1" | "GERTAXIDT_2" | "GERTAXIDT_3" | "GERTAXIDT_4" | "GERTAXIDT_5" | "GERTAXIDT_6" | "GERTAXIDT_7" | "GERCODELMA5_0" | "GERCODELMA5_1" | "GERCODELMA5_2" | "GERCODELMA5_3" | "GERCODELMA5_4" | "GERCODELMA5_5" | "GERCODELMA5_6" | "GERCODELMA5_7" | "GERPTP_0" | "SPABPCTSD_0" | "SPABPSTSD_0" | "SPAYEATSD_0" | "PORCTFACN_0" | "PORCPYACT_0" | "PORDCLPER_0" | "PORLRC_0" | "PORHQR_0" | "PORCPYACTDET_0" | "PORFINDPR_0" | "SCINUM_0" | "PORCPYACTTYP_0" | "PORSIMINVISS_0" | "PORAMTSERINV_0" | "PORAMTITMINV_0" | "PORRESFISCDA_0" | "SSTTAXACT_0" | "SSTCPY_0" | "SFINUM_0" | "COMMTYPE_0" | "ZTAXREF_0" | "STRDAT_0" | "ENDDAT_0" | "TAXAGCNUM_0" | "TAXAGCNAM_0" | "TAXAGNNUM_0" | "TAXAGNNAM_0" | "ARACPYNAM_0" | "GOSIREFNUM_0" | "SCT1_0" | "MOLID_0" | "SCT2_0" | "TRECPY_0" | "TRECPY2_0" | "IMPCPY_0" | "BDO_0" | "AGREEMENT_0" | "SERVICEID_0" | "INIPER_0" | "FINPER_0" | "SOLFIN_0" | "AMTFIN_0" | "VATREGDEB_0" | "VATNOTICE_0" | "ROWID"> | undefined;
}
