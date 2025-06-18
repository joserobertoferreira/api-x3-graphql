import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderCreateManyInput } from "../../../inputs/SalesOrderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalesOrderArgs {
  @TypeGraphQL.Field(_type => [SalesOrderCreateManyInput], {
    nullable: false
  })
  data!: SalesOrderCreateManyInput[];
}
