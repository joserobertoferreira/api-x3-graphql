import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderLineUpdateManyMutationInput } from "../../../inputs/SalesOrderLineUpdateManyMutationInput";
import { SalesOrderLineWhereInput } from "../../../inputs/SalesOrderLineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalesOrderLineArgs {
  @TypeGraphQL.Field(_type => SalesOrderLineUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SalesOrderLineWhereInput, {
    nullable: true
  })
  where?: SalesOrderLineWhereInput | undefined;
}
