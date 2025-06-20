import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderTypeOrderByWithRelationInput } from "../../../inputs/OrderTypeOrderByWithRelationInput";
import { OrderTypeWhereInput } from "../../../inputs/OrderTypeWhereInput";
import { OrderTypeWhereUniqueInput } from "../../../inputs/OrderTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrderTypeArgs {
  @TypeGraphQL.Field(_type => OrderTypeWhereInput, {
    nullable: true
  })
  where?: OrderTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrderTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
