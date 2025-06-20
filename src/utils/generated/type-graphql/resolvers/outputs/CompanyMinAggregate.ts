import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CompanyMinAggregate", {})
export class CompanyMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company!: string | null;

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
  companyName!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  isLegalCompany!: number | null;

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
  ACM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MAIFCY_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CRY_0!: string | null;

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
  NID_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CPYLOG_0!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  RGCAMT_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RGCCUR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CNTNAM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BIDNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ACCCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DIVCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  EECNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FDRX3_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  STRPER_0!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ACCCUR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  KACT_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  NUMADD_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ORICERFLG_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  EORINUM_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  OBYDIE_19!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  REXNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  STAFED_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_7!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_8!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_9!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_10!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_11!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_12!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_13!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_14!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_15!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_16!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_17!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_18!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DACDIE_19!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GRUCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PLISTC_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  RTZFLG_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  AGTPCP_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  VACCPY_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  DCLDIRBALPAY_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BDFECOCOD_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  AUSFINSRV_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_1!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_2!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_3!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_4!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_5!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_6!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  GERDEFVAL_7!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GEREECNUM_7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXCEN_7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERTAXIDT_7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_4!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_5!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_6!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERCODELMA5_7!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GERPTP_0!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  SPABPCTSD_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  SPABPSTSD_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  SPAYEATSD_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORCTFACN_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORCPYACT_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PORDCLPER_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORLRC_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PORHQR_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORCPYACTDET_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORFINDPR_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SCINUM_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PORCPYACTTYP_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  PORSIMINVISS_0!: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PORAMTSERINV_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  PORAMTITMINV_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PORRESFISCDA_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SSTTAXACT_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SSTCPY_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SFINUM_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  COMMTYPE_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ZTAXREF_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  STRDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ENDDAT_0!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TAXAGCNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TAXAGCNAM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TAXAGNNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TAXAGNNAM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ARACPYNAM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  GOSIREFNUM_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SCT1_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  MOLID_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SCT2_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TRECPY_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TRECPY2_0!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  IMPCPY_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BDO_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  AGREEMENT_0!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SERVICEID_0!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  INIPER_0!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  FINPER_0!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SOLFIN_0!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  AMTFIN_0!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  VATREGDEB_0!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  VATNOTICE_0!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
