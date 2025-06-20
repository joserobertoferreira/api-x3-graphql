import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderTypeAvgAggregate } from "../outputs/OrderTypeAvgAggregate";
import { OrderTypeCountAggregate } from "../outputs/OrderTypeCountAggregate";
import { OrderTypeMaxAggregate } from "../outputs/OrderTypeMaxAggregate";
import { OrderTypeMinAggregate } from "../outputs/OrderTypeMinAggregate";
import { OrderTypeSumAggregate } from "../outputs/OrderTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateOrderType", {})
export class AggregateOrderType {
  @TypeGraphQL.Field(_type => OrderTypeCountAggregate, {
    nullable: true
  })
  _count!: OrderTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderTypeAvgAggregate, {
    nullable: true
  })
  _avg!: OrderTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderTypeSumAggregate, {
    nullable: true
  })
  _sum!: OrderTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderTypeMinAggregate, {
    nullable: true
  })
  _min!: OrderTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderTypeMaxAggregate, {
    nullable: true
  })
  _max!: OrderTypeMaxAggregate | null;
}
