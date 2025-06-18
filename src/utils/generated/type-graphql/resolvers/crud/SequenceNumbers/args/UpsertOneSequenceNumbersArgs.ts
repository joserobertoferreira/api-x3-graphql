import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersCreateInput } from "../../../inputs/SequenceNumbersCreateInput";
import { SequenceNumbersUpdateInput } from "../../../inputs/SequenceNumbersUpdateInput";
import { SequenceNumbersWhereUniqueInput } from "../../../inputs/SequenceNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: SequenceNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateInput, {
    nullable: false
  })
  create!: SequenceNumbersCreateInput;

  @TypeGraphQL.Field(_type => SequenceNumbersUpdateInput, {
    nullable: false
  })
  update!: SequenceNumbersUpdateInput;
}
