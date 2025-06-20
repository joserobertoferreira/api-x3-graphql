import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteWhereUniqueInput } from "../../../inputs/SiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSiteOrThrowArgs {
  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: false
  })
  where!: SiteWhereUniqueInput;
}
