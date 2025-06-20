import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesCreateManyInput } from "../../../inputs/AnalyticalAccountingLinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => [AnalyticalAccountingLinesCreateManyInput], {
    nullable: false
  })
  data!: AnalyticalAccountingLinesCreateManyInput[];
}
