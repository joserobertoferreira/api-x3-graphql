import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteCreateInput } from "../../../inputs/SiteCreateInput";
import { SiteUpdateInput } from "../../../inputs/SiteUpdateInput";
import { SiteWhereUniqueInput } from "../../../inputs/SiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSiteArgs {
  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: false
  })
  where!: SiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => SiteCreateInput, {
    nullable: false
  })
  create!: SiteCreateInput;

  @TypeGraphQL.Field(_type => SiteUpdateInput, {
    nullable: false
  })
  update!: SiteUpdateInput;
}
