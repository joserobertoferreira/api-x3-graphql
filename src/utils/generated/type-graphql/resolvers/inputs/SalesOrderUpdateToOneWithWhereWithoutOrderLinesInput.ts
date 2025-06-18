import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderUpdateWithoutOrderLinesInput } from "../inputs/SalesOrderUpdateWithoutOrderLinesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";

@TypeGraphQL.InputType("SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput", {})
export class SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput {
  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderUpdateWithoutOrderLinesInput, {
    nullable: false
  })
  data!: SalesOrderUpdateWithoutOrderLinesInput;
}
