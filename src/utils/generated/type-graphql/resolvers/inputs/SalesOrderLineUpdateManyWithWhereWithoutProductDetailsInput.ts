import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineScalarWhereInput } from "../inputs/SalesOrderLineScalarWhereInput";
import { SalesOrderLineUpdateManyMutationInput } from "../inputs/SalesOrderLineUpdateManyMutationInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput", {})
export class SalesOrderLineUpdateManyWithWhereWithoutProductDetailsInput {
  @TypeGraphQL.Field(_type => SalesOrderLineScalarWhereInput, {
    nullable: false
  })
  where!: SalesOrderLineScalarWhereInput;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateManyMutationInput;
}
