import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SiteCreateManyCompanyInputEnvelope } from "../inputs/SiteCreateManyCompanyInputEnvelope";
import { SiteCreateOrConnectWithoutCompanyInput } from "../inputs/SiteCreateOrConnectWithoutCompanyInput";
import { SiteCreateWithoutCompanyInput } from "../inputs/SiteCreateWithoutCompanyInput";
import { SiteWhereUniqueInput } from "../inputs/SiteWhereUniqueInput";

@TypeGraphQL.InputType("SiteCreateNestedManyWithoutCompanyInput", {})
export class SiteCreateNestedManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [SiteCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: SiteCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SiteCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => SiteCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: SiteCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SiteWhereUniqueInput], {
    nullable: true
  })
  connect?: SiteWhereUniqueInput[] | undefined;
}
