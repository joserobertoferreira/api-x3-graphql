import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesUpdateManyMutationInput } from "../../../inputs/AnalyticalAccountingLinesUpdateManyMutationInput";
import { AnalyticalAccountingLinesWhereInput } from "../../../inputs/AnalyticalAccountingLinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnalyticalAccountingLinesArgs {
  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnalyticalAccountingLinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnalyticalAccountingLinesWhereInput, {
    nullable: true
  })
  where?: AnalyticalAccountingLinesWhereInput | undefined;
}
