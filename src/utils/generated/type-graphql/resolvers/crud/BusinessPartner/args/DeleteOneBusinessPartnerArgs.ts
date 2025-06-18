import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerWhereUniqueInput } from "../../../inputs/BusinessPartnerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereUniqueInput, {
    nullable: false
  })
  where!: BusinessPartnerWhereUniqueInput;
}
