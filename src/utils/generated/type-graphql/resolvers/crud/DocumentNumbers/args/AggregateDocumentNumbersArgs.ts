import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentNumbersOrderByWithRelationInput } from "../../../inputs/DocumentNumbersOrderByWithRelationInput";
import { DocumentNumbersWhereInput } from "../../../inputs/DocumentNumbersWhereInput";
import { DocumentNumbersWhereUniqueInput } from "../../../inputs/DocumentNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDocumentNumbersArgs {
  @TypeGraphQL.Field(_type => DocumentNumbersWhereInput, {
    nullable: true
  })
  where?: DocumentNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentNumbersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DocumentNumbersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentNumbersWhereUniqueInput, {
    nullable: true
  })
  cursor?: DocumentNumbersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
