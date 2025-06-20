import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesUpdateInput } from "../../../inputs/AnalyticalAccountingLinesUpdateInput";
import { AnalyticalAccountingLinesWhereUniqueInput } from "../../../inputs/AnalyticalAccountingLinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesUpdateInput, {
    nullable: false
  })
  data!: AnalyticalAccountingLinesUpdateInput;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticalAccountingLinesWhereUniqueInput;
}
