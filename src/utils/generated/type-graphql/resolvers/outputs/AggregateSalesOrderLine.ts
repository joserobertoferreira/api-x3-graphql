import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineAvgAggregate } from "../outputs/SalesOrderLineAvgAggregate";
import { SalesOrderLineCountAggregate } from "../outputs/SalesOrderLineCountAggregate";
import { SalesOrderLineMaxAggregate } from "../outputs/SalesOrderLineMaxAggregate";
import { SalesOrderLineMinAggregate } from "../outputs/SalesOrderLineMinAggregate";
import { SalesOrderLineSumAggregate } from "../outputs/SalesOrderLineSumAggregate";

@TypeGraphQL.ObjectType("AggregateSalesOrderLine", {})
export class AggregateSalesOrderLine {
  @TypeGraphQL.Field(_type => SalesOrderLineCountAggregate, {
    nullable: true
  })
  _count!: SalesOrderLineCountAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderLineAvgAggregate, {
    nullable: true
  })
  _avg!: SalesOrderLineAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderLineSumAggregate, {
    nullable: true
  })
  _sum!: SalesOrderLineSumAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderLineMinAggregate, {
    nullable: true
  })
  _min!: SalesOrderLineMinAggregate | null;

  @TypeGraphQL.Field(_type => SalesOrderLineMaxAggregate, {
    nullable: true
  })
  _max!: SalesOrderLineMaxAggregate | null;
}
