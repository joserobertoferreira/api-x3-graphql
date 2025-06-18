import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BusinessPartnerAvgAggregate } from "../outputs/BusinessPartnerAvgAggregate";
import { BusinessPartnerCountAggregate } from "../outputs/BusinessPartnerCountAggregate";
import { BusinessPartnerMaxAggregate } from "../outputs/BusinessPartnerMaxAggregate";
import { BusinessPartnerMinAggregate } from "../outputs/BusinessPartnerMinAggregate";
import { BusinessPartnerSumAggregate } from "../outputs/BusinessPartnerSumAggregate";

@TypeGraphQL.ObjectType("AggregateBusinessPartner", {})
export class AggregateBusinessPartner {
  @TypeGraphQL.Field(_type => BusinessPartnerCountAggregate, {
    nullable: true
  })
  _count!: BusinessPartnerCountAggregate | null;

  @TypeGraphQL.Field(_type => BusinessPartnerAvgAggregate, {
    nullable: true
  })
  _avg!: BusinessPartnerAvgAggregate | null;

  @TypeGraphQL.Field(_type => BusinessPartnerSumAggregate, {
    nullable: true
  })
  _sum!: BusinessPartnerSumAggregate | null;

  @TypeGraphQL.Field(_type => BusinessPartnerMinAggregate, {
    nullable: true
  })
  _min!: BusinessPartnerMinAggregate | null;

  @TypeGraphQL.Field(_type => BusinessPartnerMaxAggregate, {
    nullable: true
  })
  _max!: BusinessPartnerMaxAggregate | null;
}
