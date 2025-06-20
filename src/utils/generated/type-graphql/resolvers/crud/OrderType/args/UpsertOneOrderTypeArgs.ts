import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeCreateInput } from "../../../inputs/OrderTypeCreateInput";
import { OrderTypeUpdateInput } from "../../../inputs/OrderTypeUpdateInput";
import { OrderTypeWhereUniqueInput } from "../../../inputs/OrderTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OrderTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderTypeCreateInput, {
    nullable: false
  })
  create!: OrderTypeCreateInput;

  @TypeGraphQL.Field(_type => OrderTypeUpdateInput, {
    nullable: false
  })
  update!: OrderTypeUpdateInput;
}
