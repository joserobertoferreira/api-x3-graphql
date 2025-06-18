import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersWhereUniqueInput } from "../../../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSequenceNumbersOrThrowArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;
}
