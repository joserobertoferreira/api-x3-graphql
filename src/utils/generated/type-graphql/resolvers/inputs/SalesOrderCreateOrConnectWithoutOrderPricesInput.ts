import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateWithoutOrderPricesInput } from "../inputs/SalesOrderCreateWithoutOrderPricesInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderCreateOrConnectWithoutOrderPricesInput", {})
export class SalesOrderCreateOrConnectWithoutOrderPricesInput {
  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: false
  })
  where!: SalesOrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderPricesInput, {
    nullable: false
  })
  create!: SalesOrderCreateWithoutOrderPricesInput;
}
