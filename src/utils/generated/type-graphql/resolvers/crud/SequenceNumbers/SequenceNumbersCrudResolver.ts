import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSequenceNumbersArgs } from "./args/AggregateSequenceNumbersArgs";
import { CreateManySequenceNumbersArgs } from "./args/CreateManySequenceNumbersArgs";
import { CreateOneSequenceNumbersArgs } from "./args/CreateOneSequenceNumbersArgs";
import { DeleteManySequenceNumbersArgs } from "./args/DeleteManySequenceNumbersArgs";
import { DeleteOneSequenceNumbersArgs } from "./args/DeleteOneSequenceNumbersArgs";
import { FindFirstSequenceNumbersArgs } from "./args/FindFirstSequenceNumbersArgs";
import { FindFirstSequenceNumbersOrThrowArgs } from "./args/FindFirstSequenceNumbersOrThrowArgs";
import { FindManySequenceNumbersArgs } from "./args/FindManySequenceNumbersArgs";
import { FindUniqueSequenceNumbersArgs } from "./args/FindUniqueSequenceNumbersArgs";
import { FindUniqueSequenceNumbersOrThrowArgs } from "./args/FindUniqueSequenceNumbersOrThrowArgs";
import { GroupBySequenceNumbersArgs } from "./args/GroupBySequenceNumbersArgs";
import { UpdateManySequenceNumbersArgs } from "./args/UpdateManySequenceNumbersArgs";
import { UpdateOneSequenceNumbersArgs } from "./args/UpdateOneSequenceNumbersArgs";
import { UpsertOneSequenceNumbersArgs } from "./args/UpsertOneSequenceNumbersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SequenceNumbers } from "../../../models/SequenceNumbers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSequenceNumbers } from "../../outputs/AggregateSequenceNumbers";
import { SequenceNumbersGroupBy } from "../../outputs/SequenceNumbersGroupBy";

@TypeGraphQL.Resolver(_of => SequenceNumbers)
export class SequenceNumbersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSequenceNumbers, {
    nullable: false
  })
  async aggregateSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSequenceNumbersArgs): Promise<AggregateSequenceNumbers> {
    return getPrismaFromContext(ctx).sequenceNumbers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySequenceNumbersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: false
  })
  async createOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSequenceNumbersArgs): Promise<SequenceNumbers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySequenceNumbersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: true
  })
  async deleteOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SequenceNumbers, {
    nullable: true
  })
  async findFirstSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SequenceNumbers, {
    nullable: true
  })
  async findFirstSequenceNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSequenceNumbersOrThrowArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SequenceNumbers], {
    nullable: false
  })
  async findManySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySequenceNumbersArgs): Promise<SequenceNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SequenceNumbers, {
    nullable: true
  })
  async findUniqueSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SequenceNumbers, {
    nullable: true
  })
  async findUniqueSequenceNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSequenceNumbersOrThrowArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SequenceNumbersGroupBy], {
    nullable: false
  })
  async groupBySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySequenceNumbersArgs): Promise<SequenceNumbersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySequenceNumbersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: true
  })
  async updateOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSequenceNumbersArgs): Promise<SequenceNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SequenceNumbers, {
    nullable: false
  })
  async upsertOneSequenceNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSequenceNumbersArgs): Promise<SequenceNumbers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).sequenceNumbers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
