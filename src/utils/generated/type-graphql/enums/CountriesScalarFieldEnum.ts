import * as TypeGraphQL from "type-graphql";

export enum CountriesScalarFieldEnum {
  code = "code",
  countryName = "countryName",
  language = "language",
  currency = "currency"
}
TypeGraphQL.registerEnumType(CountriesScalarFieldEnum, {
  name: "CountriesScalarFieldEnum",
  description: undefined,
});
