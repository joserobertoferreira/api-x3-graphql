import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentNumbersArgs } from "./args/AggregateDocumentNumbersArgs";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { AggregateDocumentNumbers } from "../../outputs/AggregateDocumentNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class AggregateDocumentNumbersResolver {
  @TypeGraphQL.Query(_returns => AggregateDocumentNumbers, {
    nullable: false
  })
  async aggregateDocumentNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDocumentNumbersArgs): Promise<AggregateDocumentNumbers> {
    return getPrismaFromContext(ctx).documentNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
