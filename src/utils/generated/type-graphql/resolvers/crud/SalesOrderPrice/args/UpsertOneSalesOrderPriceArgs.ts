import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceCreateInput } from "../../../inputs/SalesOrderPriceCreateInput";
import { SalesOrderPriceUpdateInput } from "../../../inputs/SalesOrderPriceUpdateInput";
import { SalesOrderPriceWhereUniqueInput } from "../../../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceCreateInput, {
    nullable: false
  })
  create!: SalesOrderPriceCreateInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateInput, {
    nullable: false
  })
  update!: SalesOrderPriceUpdateInput;
}
