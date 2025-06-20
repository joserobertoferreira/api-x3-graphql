import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SiteOrderByWithRelationInput } from "../../../inputs/SiteOrderByWithRelationInput";
import { SiteWhereInput } from "../../../inputs/SiteWhereInput";
import { SiteWhereUniqueInput } from "../../../inputs/SiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSiteArgs {
  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  where?: SiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SiteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SiteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SiteWhereUniqueInput, {
    nullable: true
  })
  cursor?: SiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
