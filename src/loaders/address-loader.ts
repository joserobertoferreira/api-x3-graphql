import { Address, PrismaClient } from '@prisma/client';

export const batchCompanyAddress = async (companyCodes: readonly string[], prisma: PrismaClient) => {
  console.log(`DataLoader: Batching address fetch for companies: [${companyCodes.join(', ')}]`);

  const address = await prisma.address.findMany({
    where: {
      entityType: { equals: 2 },
      entityNumber: { in: [...companyCodes] },
    },
  });

  const addressesByCompany = address.reduce(
    (acc, address) => {
      if (!acc[address.entityNumber]) {
        acc[address.entityNumber] = [];
      }
      acc[address.entityNumber].push(address);
      return acc;
    },
    {} as Record<string, Address[]>,
  );

  return companyCodes.map((code) => addressesByCompany[code] || []);
};

export const batchSiteAddress = async (siteCodes: readonly string[], prisma: PrismaClient) => {
  console.log(`DataLoader: Batching address fetch for sites: [${siteCodes.join(', ')}]`);

  const address = await prisma.address.findMany({
    where: {
      entityType: { equals: 3 },
      entityNumber: { in: [...siteCodes] },
    },
  });

  const addressesBySite = address.reduce(
    (acc, address) => {
      if (!acc[address.entityNumber]) {
        acc[address.entityNumber] = [];
      }
      acc[address.entityNumber].push(address);
      return acc;
    },
    {} as Record<string, Address[]>,
  );

  return siteCodes.map((code) => addressesBySite[code] || []);
};
