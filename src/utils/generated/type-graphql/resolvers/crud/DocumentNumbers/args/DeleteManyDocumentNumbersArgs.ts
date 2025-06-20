import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersWhereInput } from "../../../inputs/DocumentNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;
}
