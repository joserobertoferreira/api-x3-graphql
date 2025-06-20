import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeCreateManyInput } from "../../../inputs/OrderTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrderTypeArgs {
  @TypeGraphQL.Field(_type => [OrderTypeCreateManyInput], {
    nullable: false
  })
  data!: OrderTypeCreateManyInput[];
}
