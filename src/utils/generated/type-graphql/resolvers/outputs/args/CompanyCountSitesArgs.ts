import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteWhereInput } from "../../inputs/SiteWhereInput";

@TypeGraphQL.ArgsType()
export class CompanyCountSitesArgs {
  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  where?: SiteWhereInput | undefined;
}
