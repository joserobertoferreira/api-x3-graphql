import * as TypeGraphQL from "type-graphql";

export enum OrderTypeScalarFieldEnum {
  UPDTICK_0 = "UPDTICK_0",
  orderType = "orderType",
  legislation = "legislation",
  descriptions = "descriptions",
  sequenceNumber = "sequenceNumber",
  orderTypeDescription = "orderTypeDescription",
  orderTypeOrder = "orderTypeOrder",
  orderCategory = "orderCategory",
  manualSequence = "manualSequence",
  group = "group",
  deliveryType = "deliveryType",
  createDate = "createDate",
  createUser = "createUser",
  updateDate = "updateDate",
  updateUser = "updateUser",
  createDatetime = "createDatetime",
  updateDatetime = "updateDatetime",
  singleID = "singleID",
  finalSequenceNumber = "finalSequenceNumber",
  recordType = "recordType",
  ROWID = "ROWID"
}
TypeGraphQL.registerEnumType(OrderTypeScalarFieldEnum, {
  name: "OrderTypeScalarFieldEnum",
  description: undefined,
});
