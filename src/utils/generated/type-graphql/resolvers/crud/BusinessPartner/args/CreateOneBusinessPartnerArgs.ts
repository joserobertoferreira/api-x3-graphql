import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerCreateInput } from "../../../inputs/BusinessPartnerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerCreateInput, {
    nullable: true
  })
  data?: BusinessPartnerCreateInput | undefined;
}
