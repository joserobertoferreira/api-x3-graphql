import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesCreateInput } from "../../../inputs/AnalyticalAccountingLinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesCreateInput, {
    nullable: true
  })
  data?: AnalyticalAccountingLinesCreateInput | undefined;
}
