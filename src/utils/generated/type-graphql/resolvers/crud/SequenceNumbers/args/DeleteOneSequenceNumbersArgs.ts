import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersWhereUniqueInput } from "../../../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;
}
