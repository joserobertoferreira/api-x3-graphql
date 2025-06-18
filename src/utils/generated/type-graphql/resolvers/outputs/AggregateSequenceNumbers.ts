import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersAvgAggregate } from "../outputs/SequenceNumbersAvgAggregate";
import { SequenceNumbersCountAggregate } from "../outputs/SequenceNumbersCountAggregate";
import { SequenceNumbersMaxAggregate } from "../outputs/SequenceNumbersMaxAggregate";
import { SequenceNumbersMinAggregate } from "../outputs/SequenceNumbersMinAggregate";
import { SequenceNumbersSumAggregate } from "../outputs/SequenceNumbersSumAggregate";

@TypeGraphQL.ObjectType("AggregateSequenceNumbers", {})
export class AggregateSequenceNumbers {
  @TypeGraphQL.Field(_type => SequenceNumbersCountAggregate, {
    nullable: true
  })
  _count!: SequenceNumbersCountAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersAvgAggregate, {
    nullable: true
  })
  _avg!: SequenceNumbersAvgAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersSumAggregate, {
    nullable: true
  })
  _sum!: SequenceNumbersSumAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersMinAggregate, {
    nullable: true
  })
  _min!: SequenceNumbersMinAggregate | null;

  @TypeGraphQL.Field(_type => SequenceNumbersMaxAggregate, {
    nullable: true
  })
  _max!: SequenceNumbersMaxAggregate | null;
}
