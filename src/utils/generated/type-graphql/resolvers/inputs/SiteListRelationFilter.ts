import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteWhereInput } from "../inputs/SiteWhereInput";

@TypeGraphQL.InputType("SiteListRelationFilter", {})
export class SiteListRelationFilter {
  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  every?: SiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  some?: SiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => SiteWhereInput, {
    nullable: true
  })
  none?: SiteWhereInput | undefined;
}
