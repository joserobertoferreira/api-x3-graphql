import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSequenceNumbersOrThrowArgs } from "./args/FindFirstSequenceNumbersOrThrowArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class FindFirstSequenceNumbersOrThrowResolver {
  @TypeGraphQL.Query(_returns => SequenceNumbers, {
    nullable: true
  })
  async findFirstSequenceNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSequenceNumbersOrThrowArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
