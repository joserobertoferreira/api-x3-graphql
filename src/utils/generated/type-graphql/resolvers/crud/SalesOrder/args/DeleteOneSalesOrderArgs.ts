import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderWhereUniqueInput } from "../../../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderWhereUniqueInput;
}
