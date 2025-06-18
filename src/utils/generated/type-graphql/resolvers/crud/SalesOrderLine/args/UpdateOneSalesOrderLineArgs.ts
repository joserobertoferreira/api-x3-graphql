import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineUpdateInput } from "../../../inputs/SalesOrderLineUpdateInput";
import { SalesOrderLineWhereUniqueInput } from "../../../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineUpdateInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateInput;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;
}
