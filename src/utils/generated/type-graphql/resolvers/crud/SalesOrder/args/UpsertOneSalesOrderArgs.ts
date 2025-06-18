import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderCreateInput } from "../../../inputs/SalesOrderCreateInput";
import { SalesOrderUpdateInput } from "../../../inputs/SalesOrderUpdateInput";
import { SalesOrderWhereUniqueInput } from "../../../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderCreateInput, {
    nullable: false
  })
  create!: SalesOrderCreateInput;

  @TypeGraphQL.Field(_type => SalesOrderUpdateInput, {
    nullable: false
  })
  update!: SalesOrderUpdateInput;
}
