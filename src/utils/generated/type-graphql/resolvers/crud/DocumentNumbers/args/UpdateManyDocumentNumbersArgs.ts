import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersUpdateManyMutationInput } from "../../../inputs/DocumentNumbersUpdateManyMutationInput";
import { DocumentNumbersWhereInput } from "../../../inputs/DocumentNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentNumbersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;
}
