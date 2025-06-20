import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesWhereUniqueInput } from "../../../inputs/AnalyticalAccountingLinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticalAccountingLinesWhereUniqueInput;
}
