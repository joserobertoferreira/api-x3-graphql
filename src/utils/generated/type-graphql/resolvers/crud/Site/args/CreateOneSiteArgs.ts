import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteCreateInput } from "../../../inputs/SiteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSiteArgs {
  @TypeGraphQL.Field(_type => SiteCreateInput, {
    nullable: true
  })
  data?: SiteCreateInput | undefined;
}
