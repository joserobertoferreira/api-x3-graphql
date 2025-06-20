import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutBusinessPartnerInput } from "../inputs/CustomerUpdateWithoutBusinessPartnerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput", {})
export class CustomerUpdateToOneWithWhereWithoutBusinessPartnerInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutBusinessPartnerInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutBusinessPartnerInput;
}
