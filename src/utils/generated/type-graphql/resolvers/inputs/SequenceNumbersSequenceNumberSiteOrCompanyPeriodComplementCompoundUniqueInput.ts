import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput", {})
export class SequenceNumbersSequenceNumberSiteOrCompanyPeriodComplementCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sequenceNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  siteOrCompany!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  period!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  complement!: string;
}
