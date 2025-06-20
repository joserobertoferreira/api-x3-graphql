import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesOrderByWithRelationInput } from "../../../inputs/AnalyticalAccountingLinesOrderByWithRelationInput";
import { AnalyticalAccountingLinesWhereInput } from "../../../inputs/AnalyticalAccountingLinesWhereInput";
import { AnalyticalAccountingLinesWhereUniqueInput } from "../../../inputs/AnalyticalAccountingLinesWhereUniqueInput";
import { AnalyticalAccountingLinesScalarFieldEnum } from "../../../../enums/AnalyticalAccountingLinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereInput, {
    nullable: true
  })
  where?: AnalyticalAccountingLinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnalyticalAccountingLinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AnalyticalAccountingLinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnalyticalAccountingLinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AnalyticalAccountingLinesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "abbreviation" | "typ" | "document" | "lineNumber" | "sequenceNumber" | "keyComplement" | "sortValue" | "ledger1" | "ledger2" | "ledger3" | "ledger4" | "ledger5" | "ledger6" | "ledger7" | "ledger8" | "ledger9" | "ledger10" | "chartCode1" | "chartCode2" | "chartCode3" | "chartCode4" | "chartCode5" | "chartCode6" | "chartCode7" | "chartCode8" | "chartCode9" | "chartCode10" | "generalAccounts1" | "generalAccounts2" | "generalAccounts3" | "generalAccounts4" | "generalAccounts5" | "generalAccounts6" | "generalAccounts7" | "generalAccounts8" | "generalAccounts9" | "generalAccounts10" | "distribution" | "dimensionType1" | "dimensionType2" | "dimensionType3" | "dimensionType4" | "dimensionType5" | "dimensionType6" | "dimensionType7" | "dimensionType8" | "dimensionType9" | "dimensionType10" | "dimensionType11" | "dimensionType12" | "dimensionType13" | "dimensionType14" | "dimensionType15" | "dimensionType16" | "dimensionType17" | "dimensionType18" | "dimensionType19" | "dimensionType20" | "dimension1" | "dimension2" | "dimension3" | "dimension4" | "dimension5" | "dimension6" | "dimension7" | "dimension8" | "dimension9" | "dimension10" | "dimension11" | "dimension12" | "dimension13" | "dimension14" | "dimension15" | "dimension16" | "dimension17" | "dimension18" | "dimension19" | "dimension20" | "nonFinancialUnit" | "quantity" | "currency" | "amount" | "createUser" | "updateUser" | "createDatetime" | "updateDatetime" | "singleID" | "ROWID"> | undefined;
}
