import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersCreateInput } from "../../../inputs/DocumentNumbersCreateInput";
import { DocumentNumbersUpdateInput } from "../../../inputs/DocumentNumbersUpdateInput";
import { DocumentNumbersWhereUniqueInput } from "../../../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentNumbersCreateInput, {
    nullable: false
  })
  create!: DocumentNumbersCreateInput;

  @TypeGraphQL.Field(_type => DocumentNumbersUpdateInput, {
    nullable: false
  })
  update!: DocumentNumbersUpdateInput;
}
