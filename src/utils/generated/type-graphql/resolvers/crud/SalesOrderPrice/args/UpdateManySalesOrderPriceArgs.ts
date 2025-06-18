import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalesOrderPriceUpdateManyMutationInput } from "../../../inputs/SalesOrderPriceUpdateManyMutationInput";
import { SalesOrderPriceWhereInput } from "../../../inputs/SalesOrderPriceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalesOrderPriceArgs {
  @TypeGraphQL.Field(_type => SalesOrderPriceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalesOrderPriceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SalesOrderPriceWhereInput, {
    nullable: true
  })
  where?: SalesOrderPriceWhereInput | undefined;
}
