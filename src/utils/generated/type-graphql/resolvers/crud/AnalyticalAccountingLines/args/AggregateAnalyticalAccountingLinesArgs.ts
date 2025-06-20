import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticalAccountingLinesOrderByWithRelationInput } from "../../../inputs/AnalyticalAccountingLinesOrderByWithRelationInput";
import { AnalyticalAccountingLinesWhereInput } from "../../../inputs/AnalyticalAccountingLinesWhereInput";
import { AnalyticalAccountingLinesWhereUniqueInput } from "../../../inputs/AnalyticalAccountingLinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAnalyticalAccountingLinesArgs {
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
}
