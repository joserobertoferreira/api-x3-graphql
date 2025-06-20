import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersCountSequenceValuesArgs } from "./args/DocumentNumbersCountSequenceValuesArgs";

@TypeGraphQL.ObjectType("DocumentNumbersCount", {})
export class DocumentNumbersCount {
  sequenceValues!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "sequenceValues",
    nullable: false
  })
  getSequenceValues(@TypeGraphQL.Root() root: DocumentNumbersCount, @TypeGraphQL.Args() args: DocumentNumbersCountSequenceValuesArgs): number {
    return root.sequenceValues;
  }
}
