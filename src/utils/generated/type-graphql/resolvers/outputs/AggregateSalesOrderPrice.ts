import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderPriceAvgAggregate } from "../outputs/SalesOrderPriceAvgAggregate";
import { SalesOrderPriceCountAggregate } from "../outputs/SalesOrderPriceCountAggregate";
import { SalesOrderPriceMaxAggregate } from "../outputs/SalesOrderPriceMaxAggregate";
import { SalesOrderPriceMinAggregate } from "../outputs/SalesOrderPriceMinAggregate";
import { SalesOrderPriceSumAggregate } from "../outputs/SalesOrderPriceSumAggregate";

@TypeGraphQL.ObjectType("AggregateSalesOrderPrice", {})
export class AggregateSalesOrderPrice {
  @TypeGraphQL.Field(_type => SalesOrderPriceCountAggregate, {
    nullable: true
  })
  _count!: SalesOrderPriceCountAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceAvgAggregate, {
    nullable: true
  })
  _avg!: SalesOrderPriceAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceSumAggregate, {
    nullable: true
  })
  _sum!: SalesOrderPriceSumAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceMinAggregate, {
    nullable: true
  })
  _min!: SalesOrderPriceMinAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderPriceMaxAggregate, {
    nullable: true
  })
  _max!: SalesOrderPriceMaxAggregate | null;
}
