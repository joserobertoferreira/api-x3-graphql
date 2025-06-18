import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerCreateManyInput } from "../../../inputs/BusinessPartnerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => [BusinessPartnerCreateManyInput], {
    nullable: false
  })
  data!: BusinessPartnerCreateManyInput[];
}
