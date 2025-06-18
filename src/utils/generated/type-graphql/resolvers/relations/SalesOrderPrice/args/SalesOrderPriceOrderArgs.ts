import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderWhereInput } from "../../../inputs/SalesOrderWhereInput";

@TypeGraphQL.ArgsType()
export class SalesOrderPriceOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;
}
