import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceUpdateInput } from "../../../inputs/SalesOrderPriceUpdateInput";
import { SalesOrderPriceWhereUniqueInput } from "../../../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;
}
