import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSequenceNumbersArgs } from "./args/AggregateSequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { AggregateSequenceNumbers } from "../../outputs/AggregateSequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class AggregateSequenceNumbersResolver {
  @TypeGraphQL.Query(_returns => AggregateSequenceNumbers, {
    nullable: false
  })
  async aggregateSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSequenceNumbersArgs): Promise<AggregateSequenceNumbers> {
    return getPrismaFromContext(ctx).sequenceNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
