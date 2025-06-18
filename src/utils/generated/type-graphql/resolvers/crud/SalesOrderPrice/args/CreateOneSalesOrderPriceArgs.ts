import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceCreateInput } from "../../../inputs/SalesOrderPriceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceCreateInput, {
    nullable: true
  })
  data?: SalesOrderPriceCreateInput | undefined;
}
