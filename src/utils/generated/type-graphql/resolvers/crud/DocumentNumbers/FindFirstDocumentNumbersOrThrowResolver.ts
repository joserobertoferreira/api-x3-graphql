import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentNumbersOrThrowArgs } from "./args/FindFirstDocumentNumbersOrThrowArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class FindFirstDocumentNumbersOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentNumbers, {
    nullable: true
  })
  async findFirstDocumentNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentNumbersOrThrowArgs): Promise<DocumentNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
