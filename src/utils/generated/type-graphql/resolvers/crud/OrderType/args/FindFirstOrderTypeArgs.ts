import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeOrderByWithRelationInput } from "../../../inputs/OrderTypeOrderByWithRelationInput";
import { OrderTypeWhereInput } from "../../../inputs/OrderTypeWhereInput";
import { OrderTypeWhereUniqueInput } from "../../../inputs/OrderTypeWhereUniqueInput";
import { OrderTypeScalarFieldEnum } from "../../../../enums/OrderTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereInput, {
    nullable: true
  })
  where?: OrderTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrderTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"UPDTICK_0" | "orderType" | "legislation" | "descriptions" | "sequenceNumber" | "orderTypeDescription" | "orderTypeOrder" | "orderCategory" | "manualSequence" | "group" | "deliveryType" | "createDate" | "createUser" | "updateDate" | "updateUser" | "createDatetime" | "updateDatetime" | "singleID" | "finalSequenceNumber" | "recordType" | "ROWID"> | undefined;
}
