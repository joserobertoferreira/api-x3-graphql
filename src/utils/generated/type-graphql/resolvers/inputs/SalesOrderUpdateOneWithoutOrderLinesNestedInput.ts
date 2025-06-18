import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateOrConnectWithoutOrderLinesInput } from "../inputs/SalesOrderCreateOrConnectWithoutOrderLinesInput";
import { SalesOrderCreateWithoutOrderLinesInput } from "../inputs/SalesOrderCreateWithoutOrderLinesInput";
import { SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput } from "../inputs/SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput";
import { SalesOrderUpsertWithoutOrderLinesInput } from "../inputs/SalesOrderUpsertWithoutOrderLinesInput";
import { SalesOrderWhereInput } from "../inputs/SalesOrderWhereInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderUpdateOneWithoutOrderLinesNestedInput", {})
export class SalesOrderUpdateOneWithoutOrderLinesNestedInput {
  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderLinesInput, {
    nullable: true
  })
  create?: SalesOrderCreateWithoutOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateOrConnectWithoutOrderLinesInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderCreateOrConnectWithoutOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderUpsertWithoutOrderLinesInput, {
    nullable: true
  })
  upsert?: SalesOrderUpsertWithoutOrderLinesInput | undefined;

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

  @TypeGraphQL.Field(_type => SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput, {
    nullable: true
  })
  update?: SalesOrderUpdateToOneWithWhereWithoutOrderLinesInput | undefined;
}
