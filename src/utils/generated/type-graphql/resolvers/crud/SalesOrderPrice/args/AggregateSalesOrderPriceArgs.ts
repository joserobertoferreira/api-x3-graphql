import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceOrderByWithRelationInput } from "../../../inputs/SalesOrderPriceOrderByWithRelationInput";
import { SalesOrderPriceWhereInput } from "../../../inputs/SalesOrderPriceWhereInput";
import { SalesOrderPriceWhereUniqueInput } from "../../../inputs/SalesOrderPriceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderPriceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalesOrderPriceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalesOrderPriceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
