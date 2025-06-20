import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SequenceNumbersMinAggregate", {})
export class SequenceNumbersMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sequenceNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  siteOrCompany!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  period!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  complement!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  sequenceValue!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  singleID!: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID!: bigint | null;
}
