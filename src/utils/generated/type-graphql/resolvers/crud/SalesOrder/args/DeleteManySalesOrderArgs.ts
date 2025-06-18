import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderWhereInput } from "../../../inputs/SalesOrderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;
}
