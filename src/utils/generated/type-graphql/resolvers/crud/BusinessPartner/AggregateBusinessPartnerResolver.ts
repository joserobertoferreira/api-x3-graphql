import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBusinessPartnerArgs } from "./args/AggregateBusinessPartnerArgs";
import { BusinessPartner } from "../../../models/BusinessPartner";
import { AggregateBusinessPartner } from "../../outputs/AggregateBusinessPartner";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BusinessPartner)
export class AggregateBusinessPartnerResolver {
  @TypeGraphQL.Query(_returns => AggregateBusinessPartner, {
    nullable: false
  })
  async aggregateBusinessPartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBusinessPartnerArgs): Promise<AggregateBusinessPartner> {
    return getPrismaFromContext(ctx).businessPartner.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
