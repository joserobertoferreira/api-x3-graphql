import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSequenceNumbersArgs } from "./args/DeleteOneSequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class DeleteOneSequenceNumbersResolver {
  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: true
  })
  async deleteOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
