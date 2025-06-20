import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCountAddressesArgs } from "./args/CompanyCountAddressesArgs";
import { CompanyCountSitesArgs } from "./args/CompanyCountSitesArgs";

@TypeGraphQL.ObjectType("CompanyCount", {})
export class CompanyCount {
  addresses!: number;
  sites!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "addresses",
    nullable: false
  })
  getAddresses(@TypeGraphQL.Root() root: CompanyCount, @TypeGraphQL.Args() args: CompanyCountAddressesArgs): number {
    return root.addresses;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "sites",
    nullable: false
  })
  getSites(@TypeGraphQL.Root() root: CompanyCount, @TypeGraphQL.Args() args: CompanyCountSitesArgs): number {
    return root.sites;
  }
}
