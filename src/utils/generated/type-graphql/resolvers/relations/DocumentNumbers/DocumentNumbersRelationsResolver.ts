import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DocumentNumbers } from "../../../models/DocumentNumbers";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { DocumentNumbersSequenceValuesArgs } from "./args/DocumentNumbersSequenceValuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentNumbers)
export class DocumentNumbersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SequenceNumbers], {
    nullable: false
  })
  async sequenceValues(@TypeGraphQL.Root() documentNumbers: DocumentNumbers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DocumentNumbersSequenceValuesArgs): Promise<SequenceNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentNumbers.findUniqueOrThrow({
      where: {
        ROWID: documentNumbers.ROWID,
      },
    }).sequenceValues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
