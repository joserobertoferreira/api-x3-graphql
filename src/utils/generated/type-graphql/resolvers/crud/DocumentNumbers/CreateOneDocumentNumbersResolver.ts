import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDocumentNumbersArgs } from "./args/CreateOneDocumentNumbersArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class CreateOneDocumentNumbersResolver {
  @TypeGraphQL.Mutation(_returns => DocumentNumbers, {
    nullable: false
  })
  async createOneDocumentNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDocumentNumbersArgs): Promise<DocumentNumbers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
