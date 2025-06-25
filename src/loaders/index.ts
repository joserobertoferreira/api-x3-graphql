import DataLoader from 'dataloader';

import { PrismaClient } from '@prisma/client';
import { batchCompanyAddress, batchSiteAddress } from './address-loader';
import { batchSites } from './site-loader';

export const createLoaders = (prisma: PrismaClient) => {
  return {
    siteAddressLoader: new DataLoader((siteCodes: readonly string[]) => batchSiteAddress(siteCodes, prisma)),
    companyAddressLoader: new DataLoader((companyCodes: readonly string[]) =>
      batchCompanyAddress(companyCodes, prisma),
    ),
    companySiteLoader: new DataLoader((companyCodes: readonly string[]) => batchSites(companyCodes, prisma)),
  };
};
