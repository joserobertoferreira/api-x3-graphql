import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SequenceNumbersCreateNestedManyWithoutDocumentInput } from "../inputs/SequenceNumbersCreateNestedManyWithoutDocumentInput";

@TypeGraphQL.InputType("DocumentNumbersCreateInput", {})
export class DocumentNumbersCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UPDTICK_0?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sequenceCode?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lengthOf?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  definitionLevel?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rtzLevel?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  type?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numberOfComponents?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentType10?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength1?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength2?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength3?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength4?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength5?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength6?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength7?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength8?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength9?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  componentLength10?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants4?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants5?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants6?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants7?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants8?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants9?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  constants10?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  chronologicalControl?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  resetToZero?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sequence?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tableName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tableAbbreviation?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  numerals?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legislation?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updateUser?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createUser?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updateDatetime?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  singleID?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ROWID?: bigint | undefined;

  @TypeGraphQL.Field(_type => SequenceNumbersCreateNestedManyWithoutDocumentInput, {
    nullable: true
  })
  sequenceValues?: SequenceNumbersCreateNestedManyWithoutDocumentInput | undefined;
}
