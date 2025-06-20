import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesWhereInput } from "../../../inputs/AnalyticalAccountingLinesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereInput, {
    nullable: true
  })
  where?: AnalyticalAccountingLinesWhereInput | undefined;
}
