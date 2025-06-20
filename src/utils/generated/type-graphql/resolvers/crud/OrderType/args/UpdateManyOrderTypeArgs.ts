import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeUpdateManyMutationInput } from "../../../inputs/OrderTypeUpdateManyMutationInput";
import { OrderTypeWhereInput } from "../../../inputs/OrderTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrderTypeWhereInput, {
    nullable: true
  })
  where?: OrderTypeWhereInput | undefined;
}
