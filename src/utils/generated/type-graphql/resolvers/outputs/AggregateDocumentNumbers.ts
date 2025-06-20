import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersAvgAggregate } from "../outputs/DocumentNumbersAvgAggregate";
import { DocumentNumbersCountAggregate } from "../outputs/DocumentNumbersCountAggregate";
import { DocumentNumbersMaxAggregate } from "../outputs/DocumentNumbersMaxAggregate";
import { DocumentNumbersMinAggregate } from "../outputs/DocumentNumbersMinAggregate";
import { DocumentNumbersSumAggregate } from "../outputs/DocumentNumbersSumAggregate";

@TypeGraphQL.ObjectType("AggregateDocumentNumbers", {})
export class AggregateDocumentNumbers {
  @TypeGraphQL.Field(_type => DocumentNumbersCountAggregate, {
    nullable: true
  })
  _count!: DocumentNumbersCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersAvgAggregate, {
    nullable: true
  })
  _avg!: DocumentNumbersAvgAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersSumAggregate, {
    nullable: true
  })
  _sum!: DocumentNumbersSumAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersMinAggregate, {
    nullable: true
  })
  _min!: DocumentNumbersMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersMaxAggregate, {
    nullable: true
  })
  _max!: DocumentNumbersMaxAggregate | null;
}
