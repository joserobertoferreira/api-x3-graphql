import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeCreateInput } from "../../../inputs/OrderTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeCreateInput, {
    nullable: true
  })
  data?: OrderTypeCreateInput | undefined;
}
