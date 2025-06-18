import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalesOrderPriceArgs } from "./args/AggregateSalesOrderPriceArgs";
import { CreateManySalesOrderPriceArgs } from "./args/CreateManySalesOrderPriceArgs";
import { CreateOneSalesOrderPriceArgs } from "./args/CreateOneSalesOrderPriceArgs";
import { DeleteManySalesOrderPriceArgs } from "./args/DeleteManySalesOrderPriceArgs";
import { DeleteOneSalesOrderPriceArgs } from "./args/DeleteOneSalesOrderPriceArgs";
import { FindFirstSalesOrderPriceArgs } from "./args/FindFirstSalesOrderPriceArgs";
import { FindFirstSalesOrderPriceOrThrowArgs } from "./args/FindFirstSalesOrderPriceOrThrowArgs";
import { FindManySalesOrderPriceArgs } from "./args/FindManySalesOrderPriceArgs";
import { FindUniqueSalesOrderPriceArgs } from "./args/FindUniqueSalesOrderPriceArgs";
import { FindUniqueSalesOrderPriceOrThrowArgs } from "./args/FindUniqueSalesOrderPriceOrThrowArgs";
import { GroupBySalesOrderPriceArgs } from "./args/GroupBySalesOrderPriceArgs";
import { UpdateManySalesOrderPriceArgs } from "./args/UpdateManySalesOrderPriceArgs";
import { UpdateOneSalesOrderPriceArgs } from "./args/UpdateOneSalesOrderPriceArgs";
import { UpsertOneSalesOrderPriceArgs } from "./args/UpsertOneSalesOrderPriceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SalesOrderPrice } from "../../../models/SalesOrderPrice";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSalesOrderPrice } from "../../outputs/AggregateSalesOrderPrice";
import { SalesOrderPriceGroupBy } from "../../outputs/SalesOrderPriceGroupBy";

@TypeGraphQL.Resolver(_of => SalesOrderPrice)
export class SalesOrderPriceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSalesOrderPrice, {
    nullable: false
  })
  async aggregateSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalesOrderPriceArgs): Promise<AggregateSalesOrderPrice> {
    return getPrismaFromContext(ctx).salesOrderPrice.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySalesOrderPriceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: false
  })
  async createOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSalesOrderPriceArgs): Promise<SalesOrderPrice> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySalesOrderPriceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: true
  })
  async deleteOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async findFirstSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async findFirstSalesOrderPriceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderPriceOrThrowArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SalesOrderPrice], {
    nullable: false
  })
  async salesOrderPrices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySalesOrderPriceArgs): Promise<SalesOrderPrice[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async salesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderPrice, {
    nullable: true
  })
  async getSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderPriceOrThrowArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SalesOrderPriceGroupBy], {
    nullable: false
  })
  async groupBySalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySalesOrderPriceArgs): Promise<SalesOrderPriceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySalesOrderPriceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: true
  })
  async updateOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSalesOrderPriceArgs): Promise<SalesOrderPrice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderPrice, {
    nullable: false
  })
  async upsertOneSalesOrderPrice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSalesOrderPriceArgs): Promise<SalesOrderPrice> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderPrice.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
