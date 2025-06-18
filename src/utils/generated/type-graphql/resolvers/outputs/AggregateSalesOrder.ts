import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderAvgAggregate } from "../outputs/SalesOrderAvgAggregate";
import { SalesOrderCountAggregate } from "../outputs/SalesOrderCountAggregate";
import { SalesOrderMaxAggregate } from "../outputs/SalesOrderMaxAggregate";
import { SalesOrderMinAggregate } from "../outputs/SalesOrderMinAggregate";
import { SalesOrderSumAggregate } from "../outputs/SalesOrderSumAggregate";

@TypeGraphQL.ObjectType("AggregateSalesOrder", {})
export class AggregateSalesOrder {
  @TypeGraphQL.Field(_type => SalesOrderCountAggregate, {
    nullable: true
  })
  _count!: SalesOrderCountAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderAvgAggregate, {
    nullable: true
  })
  _avg!: SalesOrderAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderSumAggregate, {
    nullable: true
  })
  _sum!: SalesOrderSumAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderMinAggregate, {
    nullable: true
  })
  _min!: SalesOrderMinAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderMaxAggregate, {
    nullable: true
  })
  _max!: SalesOrderMaxAggregate | null;
}
