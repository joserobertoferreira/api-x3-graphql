import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerOrderByWithRelationInput } from "../../../inputs/BusinessPartnerOrderByWithRelationInput";
import { BusinessPartnerWhereInput } from "../../../inputs/BusinessPartnerWhereInput";
import { BusinessPartnerWhereUniqueInput } from "../../../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BusinessPartnerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BusinessPartnerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: true
  })
  cursor?: BusinessPartnerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
