// src/graphql/resolvers/customer/CustomerWhere.helper.ts

import { Prisma } from '@prisma/client';
import { CustomerFilterInput } from '../graphql/inputs/customer-input';

/**
 * Constrói a cláusula `where` do Prisma para a filtragem de clientes.
 * @param filter O objeto de filtro vindo da query GraphQL.
 * @returns Um objeto `Prisma.CustomerWhereInput` pronto para ser usado.
 */
export function buildCustomerWhereClause(filter: CustomerFilterInput): Prisma.CustomerWhereInput {
  const where: Prisma.CustomerWhereInput = {};

  if (!filter) {
    return where;
  }

  // Filtro de Categoria
  if (filter.category) {
    where.category = filter.category;
  }

  // Filtro de Status (Ativo/Inativo)
  if (typeof filter.isActive !== 'undefined' && filter.isActive !== null) {
    where.isActive = filter.isActive ? 2 : 1; // Ajuste os valores conforme sua regra
  }

  // Filtro de Nome (Case-Insensitive simulado)
  if (filter.nameContains) {
    let searchTerm = filter.nameContains;
    let searchVariations = [
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

  if (filter.address) {
    // --- Construção do filtro aninhado para Endereço ---
    const addressFilter: Prisma.AddressWhereInput[] = [];
    let hasAddressFilter = true;

    if (filter.address.city) {
      let searchTerm = filter.address.city;
      let searchVariations = [
        searchTerm.toUpperCase(),
        searchTerm.toLowerCase(),
        searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase(),
      ];

      addressFilter.push({
        OR: searchVariations.map((variation) => ({
          city: {
            contains: variation,
          },
        })),
      });
    }

    // Filtro de País
    if (filter.address.country) {
      addressFilter.push({
        country: {
          in: [filter.address.country.toUpperCase(), filter.address.country.toLowerCase()],
        },
      });
    }

    // Filtro de E-mail
    if (filter.address.emails) {
      const emailsInput = Array.isArray(filter.address.emails) ? filter.address.emails : [filter.address.emails];

      // 1. Normaliza APENAS o input do usuário para minúsculas.
      const normalizedEmails = emailsInput.map((e) => (typeof e === 'string' ? e.toLowerCase() : '')).filter(Boolean); // Remove strings vazias

      if (normalizedEmails.length > 0) {
        // 2. Cria uma única condição OR para procurar os emails normalizados
        // em qualquer um dos 5 campos de email.
        addressFilter.push({
          OR: normalizedEmails.flatMap((email) => [
            { addressEmail1: { contains: email } },
            { addressEmail2: { contains: email } },
            { addressEmail3: { contains: email } },
            { addressEmail4: { contains: email } },
            { addressEmail5: { contains: email } },
          ]),
        });
      }
    }

    // Se qualquer filtro de endereço foi aplicado, adiciona a cláusula `some`
    if (addressFilter.length > 0) {
      where.addresses = {
        some: {
          entityType: 1,
          AND: addressFilter,
        },
      };
    }
  }

  return where;
}
