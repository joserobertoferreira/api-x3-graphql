import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderTypeAvgOrderByAggregateInput } from "../inputs/OrderTypeAvgOrderByAggregateInput";
import { OrderTypeCountOrderByAggregateInput } from "../inputs/OrderTypeCountOrderByAggregateInput";
import { OrderTypeMaxOrderByAggregateInput } from "../inputs/OrderTypeMaxOrderByAggregateInput";
import { OrderTypeMinOrderByAggregateInput } from "../inputs/OrderTypeMinOrderByAggregateInput";
import { OrderTypeSumOrderByAggregateInput } from "../inputs/OrderTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderTypeOrderByWithAggregationInput", {})
export class OrderTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UPDTICK_0?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  legislation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descriptions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sequenceNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderTypeDescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderTypeOrder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderCategory?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manualSequence?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deliveryType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createUser?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateUser?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createDatetime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updateDatetime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  singleID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  finalSequenceNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recordType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ROWID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrderTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrderTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrderTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrderTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrderTypeSumOrderByAggregateInput | undefined;
}
