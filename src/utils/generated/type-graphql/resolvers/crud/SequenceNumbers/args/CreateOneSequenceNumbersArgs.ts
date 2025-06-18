import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersCreateInput } from "../../../inputs/SequenceNumbersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersCreateInput, {
    nullable: true
  })
  data?: SequenceNumbersCreateInput | undefined;
}
