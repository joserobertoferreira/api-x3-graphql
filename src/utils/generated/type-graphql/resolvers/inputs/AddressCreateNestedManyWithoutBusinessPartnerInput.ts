import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyBusinessPartnerInputEnvelope } from "../inputs/AddressCreateManyBusinessPartnerInputEnvelope";
import { AddressCreateOrConnectWithoutBusinessPartnerInput } from "../inputs/AddressCreateOrConnectWithoutBusinessPartnerInput";
import { AddressCreateWithoutBusinessPartnerInput } from "../inputs/AddressCreateWithoutBusinessPartnerInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressCreateNestedManyWithoutBusinessPartnerInput", {})
export class AddressCreateNestedManyWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutBusinessPartnerInput], {
    nullable: true
  })
  create?: AddressCreateWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutBusinessPartnerInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutBusinessPartnerInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyBusinessPartnerInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyBusinessPartnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  connect?: AddressWhereUniqueInput[] | undefined;
}
