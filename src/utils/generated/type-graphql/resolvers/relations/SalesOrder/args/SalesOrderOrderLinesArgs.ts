import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineOrderByWithRelationInput } from "../../../inputs/SalesOrderLineOrderByWithRelationInput";
import { SalesOrderLineWhereInput } from "../../../inputs/SalesOrderLineWhereInput";
import { SalesOrderLineWhereUniqueInput } from "../../../inputs/SalesOrderLineWhereUniqueInput";
import { SalesOrderLineScalarFieldEnum } from "../../../../enums/SalesOrderLineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SalesOrderOrderLinesArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalesOrderLineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalesOrderLineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "salesOrder" | "lineNumber" | "sequenceNumber" | "company" | "category" | "salesSite" | "soldToCustomer" | "shipToCustomerAddress" | "product" | "majorProductVersion" | "minorProductVersion" | "shippingSite" | "locationReference" | "orderDate" | "requestedDeliveryDate" | "requestedDeliveryTime" | "requestedDeliveryReference" | "latestDeliveryTime" | "latestDeliveryDate" | "shipmentDate" | "shipmentTime" | "expectedDeliveryDate" | "lineStatus" | "isInvoiced" | "workInProgressStatus" | "workInProgressNumber" | "productStockManagement" | "quantityInSalesUnitInitiallyOrdered" | "quantityInSalesUnitOrdered" | "quantityInSalesUnitShortage" | "quantityInSalesUnitAllocated" | "quantityInSalesUnitOnDeliveryOrScheduledInvoice" | "quantityInSalesUnitDelivered" | "quantityInSalesUnitInvoiced" | "createDate" | "updateDate" | "createUser" | "updateUser" | "createDatetime" | "updateDatetime" | "singleID" | "CAD_0" | "YEA_0" | "MON_0" | "DLVDAY_0" | "WEE_0" | "IMPNUMLIG_0" | "LOT_0" | "STA_0" | "LOC_0" | "ALLTYP_0" | "DSPLINFLG_0" | "DDTANUM_0" | "DDTANUM_1" | "DDTANUM_2" | "DDTANUM_3" | "DDTANUM_4" | "DDTANUM_5" | "DDTANUM_6" | "DDTANUM_7" | "DDTANUM_8" | "DDTANOT_0" | "DDTANOT_1" | "DDTANOT_2" | "DDTANOT_3" | "DDTANOT_4" | "DDTANOT_5" | "DDTANOT_6" | "DDTANOT_7" | "DDTANOT_8" | "TDLQTY_0" | "LPRQTY_0" | "OPRQTY_0" | "PREQTY_0" | "QTYSTU_0" | "SHTQTYSTU_0" | "ALLQTYSTU_0" | "ODLQTYSTU_0" | "DLVQTYSTU_0" | "INVQTYSTU_0" | "TDLQTYSTU_0" | "LPRQTYSTU_0" | "OPRQTYSTU_0" | "PREQTYSTU_0" | "PRECOD_0" | "DRN_0" | "DLVPIO_0" | "DLVPIOCMP_0" | "BPTNUM_0" | "MDL_0" | "DAYLTI_0" | "PCK_0" | "PCKCAP_0" | "SOQTEX_0" | "SDHNUM_0" | "SDDLIN_0" | "FMI_0" | "FMINUM_0" | "FMILIN_0" | "FMISEQ_0" | "POHNUM_0" | "POPLIN_0" | "POQSEQ_0" | "PERSTRDAT_0" | "PERENDDAT_0" | "PERNBRDAY_0" | "GEOCOD_0" | "INSCTYFLG_0" | "VTS_0" | "VTC_0" | "TAXGEOFLG_0" | "TAXFLG_0" | "TAXREGFLG_0" | "RATTAXLIN_0" | "BASTAXLIN_0" | "OCNPRNBOM_0" | "NDEPRNBOM_0" | "INVPRNBOM_0" | "CCLREN_0" | "CCLDAT_0" | "PITFLG_0" | "EXPNUM_0" | "DSPLINWEI_0" | "DSPLINVOL_0" | "DSPWEU_0" | "DSPVOU_0" | "PJT_0" | "LINORDNUM_0" | "USELIMDAT_0" | "DLVFLG_0" | "INVAMT_0" | "SOQPSONUM_0" | "SOQSEQNUM_0" | "PRGBILNUM_0" | "ROWID"> | undefined;
}
