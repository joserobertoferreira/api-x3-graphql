import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderCreateInput } from "../../../inputs/SalesOrderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderCreateInput, {
    nullable: true
  })
  data?: SalesOrderCreateInput | undefined;
}
