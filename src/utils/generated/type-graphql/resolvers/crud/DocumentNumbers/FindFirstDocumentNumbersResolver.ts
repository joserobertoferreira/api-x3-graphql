import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentNumbersArgs } from "./args/FindFirstDocumentNumbersArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class FindFirstDocumentNumbersResolver {
  @TypeGraphQL.Query(_returns => DocumentNumbers, {
    nullable: true
  })
  async findFirstDocumentNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentNumbersArgs): Promise<DocumentNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
