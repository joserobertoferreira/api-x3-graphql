import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderUpdateManyMutationInput } from "../../../inputs/SalesOrderUpdateManyMutationInput";
import { SalesOrderWhereInput } from "../../../inputs/SalesOrderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalesOrderArgs {
  @TypeGraphQL.Field(_type => SalesOrderUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalesOrderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;
}
