import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceWhereUniqueInput } from "../../../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSalesOrderPriceOrThrowArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderPriceWhereUniqueInput;
}
