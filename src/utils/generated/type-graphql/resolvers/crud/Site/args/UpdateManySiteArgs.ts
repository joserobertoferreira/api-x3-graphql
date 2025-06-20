import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteUpdateManyMutationInput } from "../../../inputs/SiteUpdateManyMutationInput";
import { SiteWhereInput } from "../../../inputs/SiteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySiteArgs {
  @TypeGraphQL.Field(_type => SiteUpdateManyMutationInput, {
    nullable: false
  })
  data!: SiteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  where?: SiteWhereInput | undefined;
}
