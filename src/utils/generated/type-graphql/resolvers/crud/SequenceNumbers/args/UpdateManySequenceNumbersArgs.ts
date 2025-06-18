import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersUpdateManyMutationInput } from "../../../inputs/SequenceNumbersUpdateManyMutationInput";
import { SequenceNumbersWhereInput } from "../../../inputs/SequenceNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersUpdateManyMutationInput, {
    nullable: false
  })
  data!: SequenceNumbersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  where?: SequenceNumbersWhereInput | undefined;
}
