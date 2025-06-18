import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineOrderByWithRelationInput } from "../../../inputs/SalesOrderLineOrderByWithRelationInput";
import { SalesOrderLineWhereInput } from "../../../inputs/SalesOrderLineWhereInput";
import { SalesOrderLineWhereUniqueInput } from "../../../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderLineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalesOrderLineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalesOrderLineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
