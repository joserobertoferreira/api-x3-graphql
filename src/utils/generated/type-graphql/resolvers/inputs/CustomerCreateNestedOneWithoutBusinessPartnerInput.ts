import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutBusinessPartnerInput } from "../inputs/CustomerCreateOrConnectWithoutBusinessPartnerInput";
import { CustomerCreateWithoutBusinessPartnerInput } from "../inputs/CustomerCreateWithoutBusinessPartnerInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutBusinessPartnerInput", {})
export class CustomerCreateNestedOneWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutBusinessPartnerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutBusinessPartnerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutBusinessPartnerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutBusinessPartnerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
