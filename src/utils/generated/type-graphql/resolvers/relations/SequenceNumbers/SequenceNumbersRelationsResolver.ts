import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { SequenceNumbersDocumentArgs } from "./args/SequenceNumbersDocumentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class SequenceNumbersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => DocumentNumbers, {
    nullable: true
  })
  async document(@TypeGraphQL.Root() sequenceNumbers: SequenceNumbers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SequenceNumbersDocumentArgs): Promise<DocumentNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findUniqueOrThrow({
      where: {
        ROWID: sequenceNumbers.ROWID,
      },
    }).document({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
