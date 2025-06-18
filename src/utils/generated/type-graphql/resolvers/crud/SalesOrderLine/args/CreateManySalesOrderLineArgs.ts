import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineCreateManyInput } from "../../../inputs/SalesOrderLineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalesOrderLineArgs {
  @TypeGraphQL.Field(_type => [SalesOrderLineCreateManyInput], {
    nullable: false
  })
  data!: SalesOrderLineCreateManyInput[];
}
