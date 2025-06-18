import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineWhereInput } from "../../../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.ArgsType()
export class SalesOrderPriceLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;
}
