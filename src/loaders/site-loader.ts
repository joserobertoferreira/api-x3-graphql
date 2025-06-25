import { PrismaClient, Site } from '@prisma/client';

export const batchSites = async (companyCodes: readonly string[], prisma: PrismaClient) => {
  console.log(`DataLoader: Batching site fetch for companies: [${companyCodes.join(', ')}]`);

  const sites = await prisma.site.findMany({
    where: {
      legalCompany: { in: [...companyCodes] },
    },
  });

  // Agrupa os sites por 'legalCompany'
  const sitesByCompany = sites.reduce(
    (acc, site) => {
      if (!acc[site.legalCompany]) {
        acc[site.legalCompany] = [];
      }
      acc[site.legalCompany].push(site);
      return acc;
    },
    {} as Record<string, Site[]>,
  );

  // Retorna um array de arrays de sites, na mesma ordem dos companyCodes originais
  return companyCodes.map((code) => sitesByCompany[code] || []);
};
