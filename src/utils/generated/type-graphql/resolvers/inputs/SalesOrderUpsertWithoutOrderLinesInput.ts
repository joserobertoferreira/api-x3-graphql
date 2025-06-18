import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateWithoutOrderLinesInput } from "../inputs/SalesOrderCreateWithoutOrderLinesInput";
import { SalesOrderUpdateWithoutOrderLinesInput } from "../inputs/SalesOrderUpdateWithoutOrderLinesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";

@TypeGraphQL.InputType("SalesOrderUpsertWithoutOrderLinesInput", {})
export class SalesOrderUpsertWithoutOrderLinesInput {
  @TypeGraphQL.Field(_type => SalesOrderUpdateWithoutOrderLinesInput, {
    nullable: false
  })
  update!: SalesOrderUpdateWithoutOrderLinesInput;

  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderLinesInput, {
    nullable: false
  })
  create!: SalesOrderCreateWithoutOrderLinesInput;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  where?: SalesOrderWhereInput | undefined;
}
