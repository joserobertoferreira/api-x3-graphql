import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSequenceNumbersArgs } from "./args/UpsertOneSequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class UpsertOneSequenceNumbersResolver {
  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: false
  })
  async upsertOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSequenceNumbersArgs): Promise<SequenceNumbers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
