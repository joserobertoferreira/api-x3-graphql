import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteCreateManyCompanyInputEnvelope } from "../inputs/SiteCreateManyCompanyInputEnvelope";
import { SiteCreateOrConnectWithoutCompanyInput } from "../inputs/SiteCreateOrConnectWithoutCompanyInput";
import { SiteCreateWithoutCompanyInput } from "../inputs/SiteCreateWithoutCompanyInput";
import { SiteScalarWhereInput } from "../inputs/SiteScalarWhereInput";
import { SiteUpdateManyWithWhereWithoutCompanyInput } from "../inputs/SiteUpdateManyWithWhereWithoutCompanyInput";
import { SiteUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/SiteUpdateWithWhereUniqueWithoutCompanyInput";
import { SiteUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/SiteUpsertWithWhereUniqueWithoutCompanyInput";
import { SiteWhereUniqueInput } from "../inputs/SiteWhereUniqueInput";

@TypeGraphQL.InputType("SiteUpdateManyWithoutCompanyNestedInput", {})
export class SiteUpdateManyWithoutCompanyNestedInput {
  @TypeGraphQL.Field(_type => [SiteCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: SiteCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  upsert?: SiteUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => SiteCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: SiteCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SiteWhereUniqueInput], {
    nullable: true
  })
  set?: SiteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SiteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteWhereUniqueInput], {
    nullable: true
  })
  delete?: SiteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteWhereUniqueInput], {
    nullable: true
  })
  connect?: SiteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  update?: SiteUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteUpdateManyWithWhereWithoutCompanyInput], {
    nullable: true
  })
  updateMany?: SiteUpdateManyWithWhereWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SiteScalarWhereInput[] | undefined;
}
