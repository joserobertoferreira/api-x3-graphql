import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeUpdateInput } from "../../../inputs/OrderTypeUpdateInput";
import { OrderTypeWhereUniqueInput } from "../../../inputs/OrderTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeUpdateInput, {
    nullable: false
  })
  data!: OrderTypeUpdateInput;

  @TypeGraphQL.Field(_type => OrderTypeWhereUniqueInput, {
    nullable: false
  })
  where!: OrderTypeWhereUniqueInput;
}
