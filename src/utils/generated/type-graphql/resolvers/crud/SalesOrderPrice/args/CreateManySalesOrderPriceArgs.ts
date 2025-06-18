import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceCreateManyInput } from "../../../inputs/SalesOrderPriceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => [SalesOrderPriceCreateManyInput], {
    nullable: false
  })
  data!: SalesOrderPriceCreateManyInput[];
}
