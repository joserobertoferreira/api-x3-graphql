import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersCreateManyInput } from "../../../inputs/SequenceNumbersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySequenceNumbersArgs {
  @TypeGraphQL.Field(_type => [SequenceNumbersCreateManyInput], {
    nullable: false
  })
  data!: SequenceNumbersCreateManyInput[];
}
