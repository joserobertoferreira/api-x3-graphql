import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutBusinessPartnerInput } from "../inputs/CustomerCreateOrConnectWithoutBusinessPartnerInput";
import { CustomerCreateWithoutBusinessPartnerInput } from "../inputs/CustomerCreateWithoutBusinessPartnerInput";
import { CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput";
import { CustomerUpsertWithoutBusinessPartnerInput } from "../inputs/CustomerUpsertWithoutBusinessPartnerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutBusinessPartnerNestedInput", {})
export class CustomerUpdateOneWithoutBusinessPartnerNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutBusinessPartnerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutBusinessPartnerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutBusinessPartnerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutBusinessPartnerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutBusinessPartnerInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutBusinessPartnerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  disconnect?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  delete?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput | undefined;
}
