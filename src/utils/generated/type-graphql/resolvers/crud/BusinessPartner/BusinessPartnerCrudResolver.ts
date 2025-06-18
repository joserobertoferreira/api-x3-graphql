import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBusinessPartnerArgs } from "./args/AggregateBusinessPartnerArgs";
import { CreateManyBusinessPartnerArgs } from "./args/CreateManyBusinessPartnerArgs";
import { CreateOneBusinessPartnerArgs } from "./args/CreateOneBusinessPartnerArgs";
import { DeleteManyBusinessPartnerArgs } from "./args/DeleteManyBusinessPartnerArgs";
import { DeleteOneBusinessPartnerArgs } from "./args/DeleteOneBusinessPartnerArgs";
import { FindFirstBusinessPartnerArgs } from "./args/FindFirstBusinessPartnerArgs";
import { FindFirstBusinessPartnerOrThrowArgs } from "./args/FindFirstBusinessPartnerOrThrowArgs";
import { FindManyBusinessPartnerArgs } from "./args/FindManyBusinessPartnerArgs";
import { FindUniqueBusinessPartnerArgs } from "./args/FindUniqueBusinessPartnerArgs";
import { FindUniqueBusinessPartnerOrThrowArgs } from "./args/FindUniqueBusinessPartnerOrThrowArgs";
import { GroupByBusinessPartnerArgs } from "./args/GroupByBusinessPartnerArgs";
import { UpdateManyBusinessPartnerArgs } from "./args/UpdateManyBusinessPartnerArgs";
import { UpdateOneBusinessPartnerArgs } from "./args/UpdateOneBusinessPartnerArgs";
import { UpsertOneBusinessPartnerArgs } from "./args/UpsertOneBusinessPartnerArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBusinessPartner } from "../../outputs/AggregateBusinessPartner";
import { BusinessPartnerGroupBy } from "../../outputs/BusinessPartnerGroupBy";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class BusinessPartnerCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBusinessPartner, {
    nullable: false
  })
  async aggregateBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBusinessPartnerArgs): Promise<AggregateBusinessPartner> {
    return getPrismaFromContext(ctx).businessPartner.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBusinessPartnerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: false
  })
  async createOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBusinessPartnerArgs): Promise<BusinessPartner> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBusinessPartnerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: true
  })
  async deleteOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BusinessPartner, {
    nullable: true
  })
  async findFirstBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BusinessPartner, {
    nullable: true
  })
  async findFirstBusinessPartnerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBusinessPartnerOrThrowArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BusinessPartner], {
    nullable: false
  })
  async businessPartners(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBusinessPartnerArgs): Promise<BusinessPartner[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BusinessPartner, {
    nullable: true
  })
  async businessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BusinessPartner, {
    nullable: true
  })
  async getBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBusinessPartnerOrThrowArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BusinessPartnerGroupBy], {
    nullable: false
  })
  async groupByBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBusinessPartnerArgs): Promise<BusinessPartnerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBusinessPartnerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: true
  })
  async updateOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBusinessPartnerArgs): Promise<BusinessPartner | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BusinessPartner, {
    nullable: false
  })
  async upsertOneBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneBusinessPartnerArgs): Promise<BusinessPartner> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).businessPartner.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
