import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { DocumentNumbers } from "../models/DocumentNumbers";

@TypeGraphQL.ObjectType("SequenceNumbers", {})
export class SequenceNumbers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

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

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  sequenceValue!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  updateUser!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createUser!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDatetime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDatetime!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  singleID!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ROWID!: bigint;

  document?: DocumentNumbers | null;
}
