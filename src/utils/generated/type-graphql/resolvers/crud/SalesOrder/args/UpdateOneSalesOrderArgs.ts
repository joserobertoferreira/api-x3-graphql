import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderUpdateInput } from "../../../inputs/SalesOrderUpdateInput";
import { SalesOrderWhereUniqueInput } from "../../../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderUpdateInput, {
    nullable: false
  })
  data!: SalesOrderUpdateInput;

  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderWhereUniqueInput;
}
