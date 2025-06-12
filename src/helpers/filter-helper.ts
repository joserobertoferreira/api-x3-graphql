// src/graphql/resolvers/customer/CustomerWhere.helper.ts

import { Prisma } from '@prisma/client';
import { CustomerFilterInput } from '../graphql/inputs/customer-input';

/**
 * Constrói a cláusula `where` do Prisma para a filtragem de clientes.
 * @param input O objeto de filtro vindo da query GraphQL.
 * @returns Um objeto `Prisma.CustomerWhereInput` pronto para ser usado.
 */
export function buildCustomerWhereClause(input: CustomerFilterInput): Prisma.CustomerWhereInput {
  const where: Prisma.CustomerWhereInput = {};

  // Filtro de Categoria
  if (input.category) {
    where.category = input.category;
  }

  // Filtro de Status (Ativo/Inativo)
  if (typeof input.isActive !== 'undefined' && input.isActive !== null) {
    where.isActive = input.isActive ? 2 : 1; // Ajuste os valores conforme sua regra
  }

  // Filtro de Nome (Case-Insensitive simulado)
  if (input.nameContains) {
    const searchTerm = input.nameContains;
    const searchVariations = [
      searchTerm.toUpperCase(),
      searchTerm.toLowerCase(),
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase(),
    ];

    where.OR = searchVariations.map((variation) => ({
      customerName: {
        contains: variation,
      },
    }));
  }

  // --- Construção do filtro aninhado para Endereço ---
  const addressFilter: Prisma.AddressWhereInput = {};
  let hasAddressFilter = false;

  // Filtro de País
  if (input.country) {
    addressFilter.country = {
      in: [input.country.toUpperCase(), input.country.toLowerCase()],
    };
    hasAddressFilter = true;
  }

  // Filtro de E-mail
  if (input.email) {
    const lowercasedEmail = input.email.toLowerCase();
    // Se o filtro de endereço já tem algo (como country), adicionamos ao OR.
    // Se não, criamos um novo. Isso evita conflitos entre os filtros.
    addressFilter.OR = [
      ...(Array.isArray(addressFilter.OR) ? addressFilter.OR : []), // Mantém o OR existente se houver
      { addressEmail1: { contains: lowercasedEmail } },
      { addressEmail2: { contains: lowercasedEmail } },
      { addressEmail3: { contains: lowercasedEmail } },
      { addressEmail4: { contains: lowercasedEmail } },
      { addressEmail5: { contains: lowercasedEmail } },
    ];
    hasAddressFilter = true;
  }

  // Se qualquer filtro de endereço foi aplicado, adiciona a cláusula `some`
  if (hasAddressFilter) {
    where.addresses = {
      some: addressFilter,
    };
  }

  return where;
}
