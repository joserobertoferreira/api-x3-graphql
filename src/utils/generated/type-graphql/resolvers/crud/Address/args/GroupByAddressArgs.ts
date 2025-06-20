import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AddressOrderByWithAggregationInput } from "../../../inputs/AddressOrderByWithAggregationInput";
import { AddressScalarWhereWithAggregatesInput } from "../../../inputs/AddressScalarWhereWithAggregatesInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressScalarFieldEnum } from "../../../../enums/AddressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AddressOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AddressOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"entityType" | "entityNumber" | "code" | "description" | "defaultBankId" | "isDefault" | "addressLine1" | "addressLine2" | "addressLine3" | "zipCode" | "city" | "state" | "country" | "countryName" | "addressPhoneNumber1" | "addressPhoneNumber2" | "addressPhoneNumber3" | "addressPhoneNumber4" | "addressPhoneNumber5" | "addressEmail1" | "addressEmail2" | "addressEmail3" | "addressEmail4" | "addressEmail5" | "website" | "externalIdentifier" | "isValid" | "CODSEE_0" | "FAX_0" | "MOB_0" | "EXPNUM_0" | "XDBUILDNR_0" | "ROWID" | "createDate" | "updateDate" | "updateUser" | "createUser" | "createDatetime" | "updateDatetime" | "singleID" | "XDHOUSENR_0" | "GLNCOD_0" | "XDREGION_0" | "CRN_0" | "XDCOMMUNE_0" | "XDPOSTOFFICE_0" | "XDDISTRICT_0" | "YREGREF1_0" | "YREGREF2_0" | "YREGREF3_0" | "YREGREF4_0" | "UPDTICK_0">;

  @TypeGraphQL.Field(_type => AddressScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AddressScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
