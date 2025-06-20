import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderTypeOrderTypeLegislationCompoundUniqueInput } from "../inputs/OrderTypeOrderTypeLegislationCompoundUniqueInput";
import { OrderTypeWhereInput } from "../inputs/OrderTypeWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrderTypeWhereUniqueInput", {})
export class OrderTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => OrderTypeOrderTypeLegislationCompoundUniqueInput, {
    nullable: true
  })
  orderType_legislation?: OrderTypeOrderTypeLegislationCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeWhereInput], {
    nullable: true
  })
  AND?: OrderTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeWhereInput], {
    nullable: true
  })
  OR?: OrderTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeWhereInput], {
    nullable: true
  })
  NOT?: OrderTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UPDTICK_0?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  legislation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descriptions?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sequenceNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderTypeDescription?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderTypeOrder?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  orderCategory?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  manualSequence?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  group?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  deliveryType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createUser?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  updateUser?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createDatetime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updateDatetime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  singleID?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  finalSequenceNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recordType?: IntFilter | undefined;
}
