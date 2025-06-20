import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersCreateManyInput } from "../../../inputs/DocumentNumbersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => [DocumentNumbersCreateManyInput], {
    nullable: false
  })
  data!: DocumentNumbersCreateManyInput[];
}
