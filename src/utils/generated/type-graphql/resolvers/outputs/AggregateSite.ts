import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteAvgAggregate } from "../outputs/SiteAvgAggregate";
import { SiteCountAggregate } from "../outputs/SiteCountAggregate";
import { SiteMaxAggregate } from "../outputs/SiteMaxAggregate";
import { SiteMinAggregate } from "../outputs/SiteMinAggregate";
import { SiteSumAggregate } from "../outputs/SiteSumAggregate";

@TypeGraphQL.ObjectType("AggregateSite", {})
export class AggregateSite {
  @TypeGraphQL.Field(_type => SiteCountAggregate, {
    nullable: true
  })
  _count!: SiteCountAggregate | null;

  @TypeGraphQL.Field(_type => SiteAvgAggregate, {
    nullable: true
  })
  _avg!: SiteAvgAggregate | null;

  @TypeGraphQL.Field(_type => SiteSumAggregate, {
    nullable: true
  })
  _sum!: SiteSumAggregate | null;

  @TypeGraphQL.Field(_type => SiteMinAggregate, {
    nullable: true
  })
  _min!: SiteMinAggregate | null;

  @TypeGraphQL.Field(_type => SiteMaxAggregate, {
    nullable: true
  })
  _max!: SiteMaxAggregate | null;
}
