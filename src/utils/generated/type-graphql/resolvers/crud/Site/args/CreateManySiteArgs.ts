import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteCreateManyInput } from "../../../inputs/SiteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySiteArgs {
  @TypeGraphQL.Field(_type => [SiteCreateManyInput], {
    nullable: false
  })
  data!: SiteCreateManyInput[];
}
