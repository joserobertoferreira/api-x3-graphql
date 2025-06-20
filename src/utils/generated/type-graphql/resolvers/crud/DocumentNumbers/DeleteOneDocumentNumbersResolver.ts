import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDocumentNumbersArgs } from "./args/DeleteOneDocumentNumbersArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class DeleteOneDocumentNumbersResolver {
  @TypeGraphQL.Mutation(_returns => DocumentNumbers, {
    nullable: true
  })
  async deleteOneDocumentNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDocumentNumbersArgs): Promise<DocumentNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
