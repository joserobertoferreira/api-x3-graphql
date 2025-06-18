import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateWithoutOrderLinesInput } from "../inputs/SalesOrderCreateWithoutOrderLinesInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderCreateOrConnectWithoutOrderLinesInput", {})
export class SalesOrderCreateOrConnectWithoutOrderLinesInput {
  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderLinesInput, {
    nullable: false
  })
  create!: SalesOrderCreateWithoutOrderLinesInput;
}
