import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProductsConfiguratorProductLineCodeCompoundUniqueInput", {})
export class ProductsConfiguratorProductLineCodeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  configuratorProductLine!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;
}
