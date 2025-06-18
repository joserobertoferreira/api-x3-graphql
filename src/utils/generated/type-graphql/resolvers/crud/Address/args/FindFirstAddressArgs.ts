import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AddressOrderByWithRelationInput } from "../../../inputs/AddressOrderByWithRelationInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
import { AddressScalarFieldEnum } from "../../../../enums/AddressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AddressOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AddressOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true
  })
  cursor?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"entityType" | "entityNumber" | "code" | "description" | "defaultBankId" | "isDefault" | "addressLine1" | "addressLine2" | "addressLine3" | "zipCode" | "city" | "state" | "country" | "countryName" | "addressPhoneNumber1" | "addressPhoneNumber2" | "addressPhoneNumber3" | "addressPhoneNumber4" | "addressPhoneNumber5" | "addressEmail1" | "addressEmail2" | "addressEmail3" | "addressEmail4" | "addressEmail5" | "website" | "externalIdentifier" | "isValid" | "CODSEE_0" | "FAX_0" | "MOB_0" | "EXPNUM_0" | "XDBUILDNR_0" | "ROWID" | "CREDAT_0" | "UPDDAT_0" | "CREUSR_0" | "UPDUSR_0" | "CREDATTIM_0" | "UPDDATTIM_0" | "AUUID_0" | "XDHOUSENR_0" | "GLNCOD_0" | "XDREGION_0" | "CRN_0" | "XDCOMMUNE_0" | "XDPOSTOFFICE_0" | "XDDISTRICT_0" | "YREGREF1_0" | "YREGREF2_0" | "YREGREF3_0" | "YREGREF4_0" | "UPDTICK_0"> | undefined;
}
