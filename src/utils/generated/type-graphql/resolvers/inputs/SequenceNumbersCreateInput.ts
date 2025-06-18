import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SequenceNumbersCreateInput", {})
export class SequenceNumbersCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sequenceNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteOrCompany?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  period?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  complement?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  sequenceValue?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CREUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UPDUSR_0?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CREDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UPDDATTIM_0?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  AUUID_0?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;
}
