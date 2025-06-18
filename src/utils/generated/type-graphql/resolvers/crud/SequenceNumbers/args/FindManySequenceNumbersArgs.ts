import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SequenceNumbersOrderByWithRelationInput } from "../../../inputs/SequenceNumbersOrderByWithRelationInput";
import { SequenceNumbersWhereInput } from "../../../inputs/SequenceNumbersWhereInput";
import { SequenceNumbersWhereUniqueInput } from "../../../inputs/SequenceNumbersWhereUniqueInput";
import { SequenceNumbersScalarFieldEnum } from "../../../../enums/SequenceNumbersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySequenceNumbersArgs {
  @TypeGraphQL.Field(_type => SequenceNumbersWhereInput, {
    nullable: true
  })
  where?: SequenceNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SequenceNumbersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersWhereUniqueInput, {
    nullable: true
  })
  cursor?: SequenceNumbersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SequenceNumbersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "sequenceNumber" | "siteOrCompany" | "period" | "complement" | "sequenceValue" | "CREUSR_0" | "UPDUSR_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "ROWID"> | undefined;
}
