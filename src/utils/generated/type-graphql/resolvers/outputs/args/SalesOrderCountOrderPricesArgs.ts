import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceWhereInput } from "../../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.ArgsType()
export class SalesOrderCountOrderPricesArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;
}
