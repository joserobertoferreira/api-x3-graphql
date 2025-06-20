import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersWhereUniqueInput } from "../../../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocumentNumbersOrThrowArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentNumbersWhereUniqueInput;
}
