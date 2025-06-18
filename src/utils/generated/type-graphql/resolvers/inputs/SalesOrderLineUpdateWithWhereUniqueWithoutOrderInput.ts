import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderLineUpdateWithoutOrderInput } from "../inputs/SalesOrderLineUpdateWithoutOrderInput";
import { SalesOrderLineWhereUniqueInput } from "../inputs/SalesOrderLineWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput", {})
export class SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => SalesOrderLineWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderLineWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderLineUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: SalesOrderLineUpdateWithoutOrderInput;
}
