import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeWhereUniqueInput } from "../../../inputs/OrderTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OrderTypeWhereUniqueInput;
}
