import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersWhereInput } from "../../inputs/SequenceNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class DocumentNumbersCountSequenceValuesArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  where?: SequenceNumbersWhereInput | undefined;
}
