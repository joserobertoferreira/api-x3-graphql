import { ExpressContextFunctionArgument } from '@apollo/server/express4';
import { Request, Response } from 'express';
import prisma from '../database/config';
import { customerService } from '../services/business-partner/customer-service';
import { businessPartnerService } from '../services/business-partner/partner-service';
import { addressService } from '../services/common/address-service';
import { companyService } from '../services/common/company-service';
import { salesOrderService } from '../services/orders/sales-order-service';

export interface ApolloContext {
  req: Request;
  res: Response;
  services: {
    customerService: typeof customerService;
    addressService: typeof addressService;
    businessPartnerService: typeof businessPartnerService;
    salesOrderService: typeof salesOrderService;
    companyService: typeof companyService;
  };
  prisma: typeof prisma;
}

export const getContext = async ({ req, res }: ExpressContextFunctionArgument): Promise<ApolloContext> => {
  return {
    req: req,
    res: res,
    services: {
      addressService,
      businessPartnerService,
      customerService,
      salesOrderService,
      companyService,
    },
    prisma,
  };
};
