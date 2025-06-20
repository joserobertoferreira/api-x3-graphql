import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAnalyticalAccountingLinesArgs } from "./args/AggregateAnalyticalAccountingLinesArgs";
import { CreateManyAnalyticalAccountingLinesArgs } from "./args/CreateManyAnalyticalAccountingLinesArgs";
import { CreateOneAnalyticalAccountingLinesArgs } from "./args/CreateOneAnalyticalAccountingLinesArgs";
import { DeleteManyAnalyticalAccountingLinesArgs } from "./args/DeleteManyAnalyticalAccountingLinesArgs";
import { DeleteOneAnalyticalAccountingLinesArgs } from "./args/DeleteOneAnalyticalAccountingLinesArgs";
import { FindFirstAnalyticalAccountingLinesArgs } from "./args/FindFirstAnalyticalAccountingLinesArgs";
import { FindFirstAnalyticalAccountingLinesOrThrowArgs } from "./args/FindFirstAnalyticalAccountingLinesOrThrowArgs";
import { FindManyAnalyticalAccountingLinesArgs } from "./args/FindManyAnalyticalAccountingLinesArgs";
import { FindUniqueAnalyticalAccountingLinesArgs } from "./args/FindUniqueAnalyticalAccountingLinesArgs";
import { FindUniqueAnalyticalAccountingLinesOrThrowArgs } from "./args/FindUniqueAnalyticalAccountingLinesOrThrowArgs";
import { GroupByAnalyticalAccountingLinesArgs } from "./args/GroupByAnalyticalAccountingLinesArgs";
import { UpdateManyAnalyticalAccountingLinesArgs } from "./args/UpdateManyAnalyticalAccountingLinesArgs";
import { UpdateOneAnalyticalAccountingLinesArgs } from "./args/UpdateOneAnalyticalAccountingLinesArgs";
import { UpsertOneAnalyticalAccountingLinesArgs } from "./args/UpsertOneAnalyticalAccountingLinesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AnalyticalAccountingLines } from "../../../models/AnalyticalAccountingLines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAnalyticalAccountingLines } from "../../outputs/AggregateAnalyticalAccountingLines";
import { AnalyticalAccountingLinesGroupBy } from "../../outputs/AnalyticalAccountingLinesGroupBy";

@TypeGraphQL.Resolver(_of => AnalyticalAccountingLines)
export class AnalyticalAccountingLinesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAnalyticalAccountingLines, {
    nullable: false
  })
  async aggregateAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnalyticalAccountingLinesArgs): Promise<AggregateAnalyticalAccountingLines> {
    return getPrismaFromContext(ctx).analyticalAccountingLines.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAnalyticalAccountingLinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: false
  })
  async createOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAnalyticalAccountingLinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async deleteOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findFirstAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findFirstAnalyticalAccountingLinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAnalyticalAccountingLinesOrThrowArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AnalyticalAccountingLines], {
    nullable: false
  })
  async findManyAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findUniqueAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async findUniqueAnalyticalAccountingLinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAnalyticalAccountingLinesOrThrowArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AnalyticalAccountingLinesGroupBy], {
    nullable: false
  })
  async groupByAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAnalyticalAccountingLinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: true
  })
  async updateOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AnalyticalAccountingLines, {
    nullable: false
  })
  async upsertOneAnalyticalAccountingLines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAnalyticalAccountingLinesArgs): Promise<AnalyticalAccountingLines> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).analyticalAccountingLines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
