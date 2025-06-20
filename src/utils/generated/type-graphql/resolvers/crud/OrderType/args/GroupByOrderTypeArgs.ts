import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeOrderByWithAggregationInput } from "../../../inputs/OrderTypeOrderByWithAggregationInput";
import { OrderTypeScalarWhereWithAggregatesInput } from "../../../inputs/OrderTypeScalarWhereWithAggregatesInput";
import { OrderTypeWhereInput } from "../../../inputs/OrderTypeWhereInput";
import { OrderTypeScalarFieldEnum } from "../../../../enums/OrderTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereInput, {
    nullable: true
  })
  where?: OrderTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrderTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"UPDTICK_0" | "orderType" | "legislation" | "descriptions" | "sequenceNumber" | "orderTypeDescription" | "orderTypeOrder" | "orderCategory" | "manualSequence" | "group" | "deliveryType" | "createDate" | "createUser" | "updateDate" | "updateUser" | "createDatetime" | "updateDatetime" | "singleID" | "finalSequenceNumber" | "recordType" | "ROWID">;

  @TypeGraphQL.Field(_type => OrderTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
