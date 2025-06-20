import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyAvgAggregate } from "../outputs/CompanyAvgAggregate";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";
import { CompanySumAggregate } from "../outputs/CompanySumAggregate";

@TypeGraphQL.ObjectType("CompanyGroupBy", {})
export class CompanyGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  company!: string;

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
  companyName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isLegalCompany!: number;

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
  ACM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MAIFCY_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CRY_0!: string;

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
  NID_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CPYLOG_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  RGCAMT_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RGCCUR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CNTNAM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BIDNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ACCCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DIVCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  EECNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FDRX3_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  STRPER_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ACCCUR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  KACT_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  NUMADD_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ORICERFLG_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  EORINUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_11!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_12!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_13!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_14!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_15!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_16!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_17!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_18!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OBYDIE_19!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  REXNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  STAFED_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_11!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_12!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_13!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_14!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_15!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_16!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_17!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_18!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DACDIE_19!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GRUCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PLISTC_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RTZFLG_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  AGTPCP_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  VACCPY_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  DCLDIRBALPAY_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BDFECOCOD_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  AUSFINSRV_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  GERDEFVAL_7!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GEREECNUM_7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXCEN_7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERTAXIDT_7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERCODELMA5_7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GERPTP_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  SPABPCTSD_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  SPABPSTSD_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  SPAYEATSD_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORCTFACN_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORCPYACT_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PORDCLPER_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORLRC_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PORHQR_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORCPYACTDET_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORFINDPR_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SCINUM_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PORCPYACTTYP_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  PORSIMINVISS_0!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PORAMTSERINV_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  PORAMTITMINV_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  PORRESFISCDA_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SSTTAXACT_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SSTCPY_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SFINUM_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  COMMTYPE_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ZTAXREF_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  STRDAT_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  ENDDAT_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TAXAGCNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TAXAGCNAM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TAXAGNNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TAXAGNNAM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ARACPYNAM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  GOSIREFNUM_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SCT1_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  MOLID_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SCT2_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TRECPY_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TRECPY2_0!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  IMPCPY_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BDO_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  AGREEMENT_0!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SERVICEID_0!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  INIPER_0!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  FINPER_0!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SOLFIN_0!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  AMTFIN_0!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  VATREGDEB_0!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  VATNOTICE_0!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  @TypeGraphQL.Field(_type => CompanyCountAggregate, {
    nullable: true
  })
  _count!: CompanyCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyAvgAggregate, {
    nullable: true
  })
  _avg!: CompanyAvgAggregate | null;

  @TypeGraphQL.Field(_type => CompanySumAggregate, {
    nullable: true
  })
  _sum!: CompanySumAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMinAggregate, {
    nullable: true
  })
  _min!: CompanyMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMaxAggregate, {
    nullable: true
  })
  _max!: CompanyMaxAggregate | null;
}
