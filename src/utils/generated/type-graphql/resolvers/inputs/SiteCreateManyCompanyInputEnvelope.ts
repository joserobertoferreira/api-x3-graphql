import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteCreateManyCompanyInput } from "../inputs/SiteCreateManyCompanyInput";

@TypeGraphQL.InputType("SiteCreateManyCompanyInputEnvelope", {})
export class SiteCreateManyCompanyInputEnvelope {
  @TypeGraphQL.Field(_type => [SiteCreateManyCompanyInput], {
    nullable: false
  })
  data!: SiteCreateManyCompanyInput[];
}
