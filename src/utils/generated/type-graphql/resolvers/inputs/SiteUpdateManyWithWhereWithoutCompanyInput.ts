import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteScalarWhereInput } from "../inputs/SiteScalarWhereInput";
import { SiteUpdateManyMutationInput } from "../inputs/SiteUpdateManyMutationInput";

@TypeGraphQL.InputType("SiteUpdateManyWithWhereWithoutCompanyInput", {})
export class SiteUpdateManyWithWhereWithoutCompanyInput {
  @TypeGraphQL.Field(_type => SiteScalarWhereInput, {
    nullable: false
  })
  where!: SiteScalarWhereInput;

  @TypeGraphQL.Field(_type => SiteUpdateManyMutationInput, {
    nullable: false
  })
  data!: SiteUpdateManyMutationInput;
}
