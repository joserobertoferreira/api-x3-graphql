import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BusinessPartnerUpdateManyMutationInput } from "../../../inputs/BusinessPartnerUpdateManyMutationInput";
import { BusinessPartnerWhereInput } from "../../../inputs/BusinessPartnerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBusinessPartnerArgs {
  @TypeGraphQL.Field(_type => BusinessPartnerUpdateManyMutationInput, {
    nullable: false
  })
  data!: BusinessPartnerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BusinessPartnerWhereInput, {
    nullable: true
  })
  where?: BusinessPartnerWhereInput | undefined;
}
