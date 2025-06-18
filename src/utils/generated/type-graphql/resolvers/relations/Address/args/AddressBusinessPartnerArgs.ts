import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerWhereInput } from "../../../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.ArgsType()
export class AddressBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;
}
