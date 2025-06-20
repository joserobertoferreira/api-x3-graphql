import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyCompanyInputEnvelope } from "../inputs/AddressCreateManyCompanyInputEnvelope";
import { AddressCreateOrConnectWithoutCompanyInput } from "../inputs/AddressCreateOrConnectWithoutCompanyInput";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressCreateNestedManyWithoutCompanyInput", {})
export class AddressCreateNestedManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [AddressCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: AddressCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: AddressCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: AddressCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  connect?: AddressWhereUniqueInput[] | undefined;
}
