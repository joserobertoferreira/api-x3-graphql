import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProductsSearchKeyCodeCompoundUniqueInput", {})
export class ProductsSearchKeyCodeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  searchKey!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;
}
