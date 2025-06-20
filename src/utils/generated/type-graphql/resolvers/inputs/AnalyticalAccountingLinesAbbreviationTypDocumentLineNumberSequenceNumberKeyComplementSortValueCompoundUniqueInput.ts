import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AnalyticalAccountingLinesAbbreviationTypDocumentLineNumberSequenceNumberKeyComplementSortValueCompoundUniqueInput", {})
export class AnalyticalAccountingLinesAbbreviationTypDocumentLineNumberSequenceNumberKeyComplementSortValueCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  abbreviation!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  typ!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  document!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lineNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sequenceNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyComplement!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sortValue!: number;
}
