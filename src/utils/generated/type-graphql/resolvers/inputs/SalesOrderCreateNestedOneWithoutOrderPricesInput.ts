import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateOrConnectWithoutOrderPricesInput } from "../inputs/SalesOrderCreateOrConnectWithoutOrderPricesInput";
import { SalesOrderCreateWithoutOrderPricesInput } from "../inputs/SalesOrderCreateWithoutOrderPricesInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderCreateNestedOneWithoutOrderPricesInput", {})
export class SalesOrderCreateNestedOneWithoutOrderPricesInput {
  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderPricesInput, {
    nullable: true
  })
  create?: SalesOrderCreateWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateOrConnectWithoutOrderPricesInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderCreateOrConnectWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderWhereUniqueInput | undefined;
}
