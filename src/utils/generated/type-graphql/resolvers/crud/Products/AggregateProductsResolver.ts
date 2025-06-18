import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProductsArgs } from "./args/AggregateProductsArgs";
import { Products } from "../../../models/Products";
import { AggregateProducts } from "../../outputs/AggregateProducts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Products)
export class AggregateProductsResolver {
  @TypeGraphQL.Query(_returns => AggregateProducts, {
    nullable: false
  })
  async aggregateProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductsArgs): Promise<AggregateProducts> {
    return getPrismaFromContext(ctx).products.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
