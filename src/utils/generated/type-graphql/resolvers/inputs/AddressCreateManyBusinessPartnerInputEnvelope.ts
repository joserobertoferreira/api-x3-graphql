import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressCreateManyBusinessPartnerInput } from "../inputs/AddressCreateManyBusinessPartnerInput";

@TypeGraphQL.InputType("AddressCreateManyBusinessPartnerInputEnvelope", {})
export class AddressCreateManyBusinessPartnerInputEnvelope {
  @TypeGraphQL.Field(_type => [AddressCreateManyBusinessPartnerInput], {
    nullable: false
  })
  data!: AddressCreateManyBusinessPartnerInput[];
}
