import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateOrConnectWithoutOrderPricesInput } from "../inputs/SalesOrderCreateOrConnectWithoutOrderPricesInput";
import { SalesOrderCreateWithoutOrderPricesInput } from "../inputs/SalesOrderCreateWithoutOrderPricesInput";
import { SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput } from "../inputs/SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput";
import { SalesOrderUpsertWithoutOrderPricesInput } from "../inputs/SalesOrderUpsertWithoutOrderPricesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderUpdateOneWithoutOrderPricesNestedInput", {})
export class SalesOrderUpdateOneWithoutOrderPricesNestedInput {
  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderPricesInput, {
    nullable: true
  })
  create?: SalesOrderCreateWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateOrConnectWithoutOrderPricesInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderCreateOrConnectWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderUpsertWithoutOrderPricesInput, {
    nullable: true
  })
  upsert?: SalesOrderUpsertWithoutOrderPricesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  disconnect?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereInput, {
    nullable: true
  })
  delete?: SalesOrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput, {
    nullable: true
  })
  update?: SalesOrderUpdateToOneWithWhereWithoutOrderPricesInput | undefined;
}
