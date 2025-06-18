import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";

@TypeGraphQL.ArgsType()
export class AddressCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
