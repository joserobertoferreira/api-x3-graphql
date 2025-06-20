import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOrderTypeArgs } from "./args/AggregateOrderTypeArgs";
import { OrderType } from "../../../models/OrderType";
import { AggregateOrderType } from "../../outputs/AggregateOrderType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderType)
export class AggregateOrderTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateOrderType, {
    nullable: false
  })
  async aggregateOrderType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrderTypeArgs): Promise<AggregateOrderType> {
    return getPrismaFromContext(ctx).orderType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
