import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSequenceNumbersArgs } from "./args/CreateOneSequenceNumbersArgs";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class CreateOneSequenceNumbersResolver {
  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: false
  })
  async createOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSequenceNumbersArgs): Promise<SequenceNumbers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
