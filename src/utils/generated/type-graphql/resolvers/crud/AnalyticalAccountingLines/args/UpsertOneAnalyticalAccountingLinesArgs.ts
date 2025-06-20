import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesCreateInput } from "../../../inputs/AnalyticalAccountingLinesCreateInput";
import { AnalyticalAccountingLinesUpdateInput } from "../../../inputs/AnalyticalAccountingLinesUpdateInput";
import { AnalyticalAccountingLinesWhereUniqueInput } from "../../../inputs/AnalyticalAccountingLinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticalAccountingLinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesCreateInput, {
    nullable: false
  })
  create!: AnalyticalAccountingLinesCreateInput;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesUpdateInput, {
    nullable: false
  })
  update!: AnalyticalAccountingLinesUpdateInput;
}
