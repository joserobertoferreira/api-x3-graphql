import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySequenceNumbersArgs } from "./args/GroupBySequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { SequenceNumbersGroupBy } from "../../outputs/SequenceNumbersGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class GroupBySequenceNumbersResolver {
  @TypeGraphQL.Query(_returns => [SequenceNumbersGroupBy], {
    nullable: false
  })
  async groupBySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySequenceNumbersArgs): Promise<SequenceNumbersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
