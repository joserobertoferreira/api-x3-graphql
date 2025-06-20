import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersUpdateInput } from "../../../inputs/DocumentNumbersUpdateInput";
import { DocumentNumbersWhereUniqueInput } from "../../../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersUpdateInput, {
    nullable: false
  })
  data!: DocumentNumbersUpdateInput;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentNumbersWhereUniqueInput;
}
