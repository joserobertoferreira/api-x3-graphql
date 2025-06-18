import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerCreateInput } from "../../../inputs/BusinessPartnerCreateInput";
import { BusinessPartnerUpdateInput } from "../../../inputs/BusinessPartnerUpdateInput";
import { BusinessPartnerWhereUniqueInput } from "../../../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessPartnerWhereUniqueInput;

  @TypeGraphQL.Field(_type => BusinessPartnerCreateInput, {
    nullable: false
  })
  create!: BusinessPartnerCreateInput;

  @TypeGraphQL.Field(_type => BusinessPartnerUpdateInput, {
    nullable: false
  })
  update!: BusinessPartnerUpdateInput;
}
