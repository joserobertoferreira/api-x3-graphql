import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineCreateInput } from "../../../inputs/SalesOrderLineCreateInput";
import { SalesOrderLineUpdateInput } from "../../../inputs/SalesOrderLineUpdateInput";
import { SalesOrderLineWhereUniqueInput } from "../../../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineCreateInput, {
    nullable: false
  })
  create!: SalesOrderLineCreateInput;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateInput, {
    nullable: false
  })
  update!: SalesOrderLineUpdateInput;
}
