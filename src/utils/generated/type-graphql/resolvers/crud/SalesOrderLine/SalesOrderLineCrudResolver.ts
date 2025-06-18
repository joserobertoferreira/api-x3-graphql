import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalesOrderLineArgs } from "./args/AggregateSalesOrderLineArgs";
import { CreateManySalesOrderLineArgs } from "./args/CreateManySalesOrderLineArgs";
import { CreateOneSalesOrderLineArgs } from "./args/CreateOneSalesOrderLineArgs";
import { DeleteManySalesOrderLineArgs } from "./args/DeleteManySalesOrderLineArgs";
import { DeleteOneSalesOrderLineArgs } from "./args/DeleteOneSalesOrderLineArgs";
import { FindFirstSalesOrderLineArgs } from "./args/FindFirstSalesOrderLineArgs";
import { FindFirstSalesOrderLineOrThrowArgs } from "./args/FindFirstSalesOrderLineOrThrowArgs";
import { FindManySalesOrderLineArgs } from "./args/FindManySalesOrderLineArgs";
import { FindUniqueSalesOrderLineArgs } from "./args/FindUniqueSalesOrderLineArgs";
import { FindUniqueSalesOrderLineOrThrowArgs } from "./args/FindUniqueSalesOrderLineOrThrowArgs";
import { GroupBySalesOrderLineArgs } from "./args/GroupBySalesOrderLineArgs";
import { UpdateManySalesOrderLineArgs } from "./args/UpdateManySalesOrderLineArgs";
import { UpdateOneSalesOrderLineArgs } from "./args/UpdateOneSalesOrderLineArgs";
import { UpsertOneSalesOrderLineArgs } from "./args/UpsertOneSalesOrderLineArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SalesOrderLine } from "../../../models/SalesOrderLine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSalesOrderLine } from "../../outputs/AggregateSalesOrderLine";
import { SalesOrderLineGroupBy } from "../../outputs/SalesOrderLineGroupBy";

@TypeGraphQL.Resolver(_of => SalesOrderLine)
export class SalesOrderLineCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSalesOrderLine, {
    nullable: false
  })
  async aggregateSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalesOrderLineArgs): Promise<AggregateSalesOrderLine> {
    return getPrismaFromContext(ctx).salesOrderLine.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySalesOrderLineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: false
  })
  async createOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSalesOrderLineArgs): Promise<SalesOrderLine> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySalesOrderLineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: true
  })
  async deleteOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async findFirstSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async findFirstSalesOrderLineOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalesOrderLineOrThrowArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SalesOrderLine], {
    nullable: false
  })
  async salesOrderLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySalesOrderLineArgs): Promise<SalesOrderLine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async salesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SalesOrderLine, {
    nullable: true
  })
  async getSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSalesOrderLineOrThrowArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SalesOrderLineGroupBy], {
    nullable: false
  })
  async groupBySalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySalesOrderLineArgs): Promise<SalesOrderLineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySalesOrderLineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: true
  })
  async updateOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSalesOrderLineArgs): Promise<SalesOrderLine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SalesOrderLine, {
    nullable: false
  })
  async upsertOneSalesOrderLine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSalesOrderLineArgs): Promise<SalesOrderLine> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salesOrderLine.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
