import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyCreateManyInput } from "../../../inputs/CompanyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCompanyArgs {
  @TypeGraphQL.Field(_type => [CompanyCreateManyInput], {
    nullable: false
  })
  data!: CompanyCreateManyInput[];
}
