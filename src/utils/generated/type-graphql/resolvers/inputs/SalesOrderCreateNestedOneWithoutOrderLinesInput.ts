import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalesOrderCreateOrConnectWithoutOrderLinesInput } from "../inputs/SalesOrderCreateOrConnectWithoutOrderLinesInput";
import { SalesOrderCreateWithoutOrderLinesInput } from "../inputs/SalesOrderCreateWithoutOrderLinesInput";
import { SalesOrderWhereUniqueInput } from "../inputs/SalesOrderWhereUniqueInput";

@TypeGraphQL.InputType("SalesOrderCreateNestedOneWithoutOrderLinesInput", {})
export class SalesOrderCreateNestedOneWithoutOrderLinesInput {
  @TypeGraphQL.Field(_type => SalesOrderCreateWithoutOrderLinesInput, {
    nullable: true
  })
  create?: SalesOrderCreateWithoutOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderCreateOrConnectWithoutOrderLinesInput, {
    nullable: true
  })
  connectOrCreate?: SalesOrderCreateOrConnectWithoutOrderLinesInput | undefined;

  @TypeGraphQL.Field(_type => SalesOrderWhereUniqueInput, {
    nullable: true
  })
  connect?: SalesOrderWhereUniqueInput | undefined;
}
