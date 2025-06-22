import { ExpressContextFunctionArgument } from '@apollo/server/express4';
import { Request, Response } from 'express';
import prisma from '../database/config';
import { customerService } from '../services/business-partner/customer-service';
import { businessPartnerService } from '../services/business-partner/partner-service';
import { addressService } from '../services/common/address-service';
import { commonService } from '../services/common/common-service';
import { companyService } from '../services/common/company-service';
import { generalAccountingService } from '../services/common/general-accounting-service';
import { parametersService } from '../services/common/parameters-service';
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
    commonService: typeof commonService;
    generalAccountingService: typeof generalAccountingService;
    parametersService: typeof parametersService;
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
      commonService,
      generalAccountingService,
      parametersService,
    },
    prisma,
  };
};
