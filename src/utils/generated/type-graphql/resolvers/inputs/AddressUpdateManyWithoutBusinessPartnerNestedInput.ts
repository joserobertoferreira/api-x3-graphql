import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyBusinessPartnerInputEnvelope } from "../inputs/AddressCreateManyBusinessPartnerInputEnvelope";
import { AddressCreateOrConnectWithoutBusinessPartnerInput } from "../inputs/AddressCreateOrConnectWithoutBusinessPartnerInput";
import { AddressCreateWithoutBusinessPartnerInput } from "../inputs/AddressCreateWithoutBusinessPartnerInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereWithoutBusinessPartnerInput } from "../inputs/AddressUpdateManyWithWhereWithoutBusinessPartnerInput";
import { AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput";
import { AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateManyWithoutBusinessPartnerNestedInput", {})
export class AddressUpdateManyWithoutBusinessPartnerNestedInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutBusinessPartnerInput], {
    nullable: true
  })
  create?: AddressCreateWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutBusinessPartnerInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput], {
    nullable: true
  })
  upsert?: AddressUpsertWithWhereUniqueWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyBusinessPartnerInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyBusinessPartnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput], {
    nullable: true
  })
  update?: AddressUpdateWithWhereUniqueWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereWithoutBusinessPartnerInput], {
    nullable: true
  })
  updateMany?: AddressUpdateManyWithWhereWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AddressScalarWhereInput[] | undefined;
}
