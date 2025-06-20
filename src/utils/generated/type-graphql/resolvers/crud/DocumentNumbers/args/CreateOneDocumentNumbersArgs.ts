import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersCreateInput } from "../../../inputs/DocumentNumbersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersCreateInput, {
    nullable: true
  })
  data?: DocumentNumbersCreateInput | undefined;
}
