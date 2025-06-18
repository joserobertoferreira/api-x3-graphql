import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineCreateInput } from "../../../inputs/SalesOrderLineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineCreateInput, {
    nullable: true
  })
  data?: SalesOrderLineCreateInput | undefined;
}
