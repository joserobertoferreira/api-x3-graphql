import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersUpdateInput } from "../../../inputs/SequenceNumbersUpdateInput";
import { SequenceNumbersWhereUniqueInput } from "../../../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersUpdateInput, {
    nullable: false
  })
  data!: SequenceNumbersUpdateInput;

  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;
}
