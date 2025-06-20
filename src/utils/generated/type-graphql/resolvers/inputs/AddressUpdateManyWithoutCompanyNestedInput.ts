import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyCompanyInputEnvelope } from "../inputs/AddressCreateManyCompanyInputEnvelope";
import { AddressCreateOrConnectWithoutCompanyInput } from "../inputs/AddressCreateOrConnectWithoutCompanyInput";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereWithoutCompanyInput } from "../inputs/AddressUpdateManyWithWhereWithoutCompanyInput";
import { AddressUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutCompanyInput";
import { AddressUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateManyWithoutCompanyNestedInput", {})
export class AddressUpdateManyWithoutCompanyNestedInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: AddressCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  upsert?: AddressUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyCompanyInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  update?: AddressUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereWithoutCompanyInput], {
    nullable: true
  })
  updateMany?: AddressUpdateManyWithWhereWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AddressScalarWhereInput[] | undefined;
}
