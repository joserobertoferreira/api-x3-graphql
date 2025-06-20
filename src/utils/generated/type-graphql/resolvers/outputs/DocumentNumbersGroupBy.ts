import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentNumbersAvgAggregate } from "../outputs/DocumentNumbersAvgAggregate";
import { DocumentNumbersCountAggregate } from "../outputs/DocumentNumbersCountAggregate";
import { DocumentNumbersMaxAggregate } from "../outputs/DocumentNumbersMaxAggregate";
import { DocumentNumbersMinAggregate } from "../outputs/DocumentNumbersMinAggregate";
import { DocumentNumbersSumAggregate } from "../outputs/DocumentNumbersSumAggregate";

@TypeGraphQL.ObjectType("DocumentNumbersGroupBy", {})
export class DocumentNumbersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UPDTICK_0!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sequenceCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  lengthOf!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  definitionLevel!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rtzLevel!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  type!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numberOfComponents!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentType10!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength4!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength5!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength6!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength7!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength8!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength9!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  componentLength10!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants2!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants3!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants4!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants5!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants6!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants7!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants8!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants9!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  constants10!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chronologicalControl!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  resetToZero!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sequence!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tableName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tableAbbreviation!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  numerals!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  legislation!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updateDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createDate!: Date;

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

  @TypeGraphQL.Field(_type => DocumentNumbersCountAggregate, {
    nullable: true
  })
  _count!: DocumentNumbersCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersAvgAggregate, {
    nullable: true
  })
  _avg!: DocumentNumbersAvgAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersSumAggregate, {
    nullable: true
  })
  _sum!: DocumentNumbersSumAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersMinAggregate, {
    nullable: true
  })
  _min!: DocumentNumbersMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentNumbersMaxAggregate, {
    nullable: true
  })
  _max!: DocumentNumbersMaxAggregate | null;
}
