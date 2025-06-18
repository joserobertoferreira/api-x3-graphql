import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSequenceNumbersArgs } from "./args/UpdateOneSequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class UpdateOneSequenceNumbersResolver {
  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: true
  })
  async updateOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
