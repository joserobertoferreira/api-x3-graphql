import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteUpdateInput } from "../../../inputs/SiteUpdateInput";
import { SiteWhereUniqueInput } from "../../../inputs/SiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSiteArgs {
  @TypeGraphQL.Field(_type => SiteUpdateInput, {
    nullable: false
  })
  data!: SiteUpdateInput;

  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: false
  })
  where!: SiteWhereUniqueInput;
}
