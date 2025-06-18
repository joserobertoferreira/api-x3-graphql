import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyCustomerInputEnvelope } from "../inputs/AddressCreateManyCustomerInputEnvelope";
import { AddressCreateOrConnectWithoutCustomerInput } from "../inputs/AddressCreateOrConnectWithoutCustomerInput";
import { AddressCreateWithoutCustomerInput } from "../inputs/AddressCreateWithoutCustomerInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereWithoutCustomerInput } from "../inputs/AddressUpdateManyWithWhereWithoutCustomerInput";
import { AddressUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutCustomerInput";
import { AddressUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutCustomerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateManyWithoutCustomerNestedInput", {})
export class AddressUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: AddressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  set?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  delete?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  connect?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: AddressUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AddressScalarWhereInput[] | undefined;
}
