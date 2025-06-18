import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerUpdateInput } from "../../../inputs/BusinessPartnerUpdateInput";
import { BusinessPartnerWhereUniqueInput } from "../../../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerUpdateInput, {
    nullable: false
  })
  data!: BusinessPartnerUpdateInput;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessPartnerWhereUniqueInput;
}
