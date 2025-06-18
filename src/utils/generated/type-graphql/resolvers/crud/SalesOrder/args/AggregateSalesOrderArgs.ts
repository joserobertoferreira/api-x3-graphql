import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderOrderByWithRelationInput } from "../../../inputs/SalesOrderOrderByWithRelationInput";
import { SalesOrderWhereInput } from "../../../inputs/SalesOrderWhereInput";
import { SalesOrderWhereUniqueInput } from "../../../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalesOrderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalesOrderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalesOrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
