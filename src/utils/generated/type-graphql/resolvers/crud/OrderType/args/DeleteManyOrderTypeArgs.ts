import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeWhereInput } from "../../../inputs/OrderTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereInput, {
    nullable: true
  })
  where?: OrderTypeWhereInput | undefined;
}
