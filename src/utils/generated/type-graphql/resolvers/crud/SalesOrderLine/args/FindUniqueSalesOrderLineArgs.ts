import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineWhereUniqueInput } from "../../../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;
}
