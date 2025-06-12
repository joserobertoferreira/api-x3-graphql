import { ExpressContextFunctionArgument } from '@apollo/server/express4';
import { Request, Response } from 'express';
import prisma from '../database/config';
import { addressService } from '../services/address-service';
import { customerService } from '../services/customer-service';
import { businessPartnerService } from '../services/partner-service';

export interface ApolloContext {
  req: Request;
  res: Response;
  services: {
    customerService: typeof customerService;
    addressService: typeof addressService;
    businessPartnerService: typeof businessPartnerService;
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
    },
    prisma,
  };
};
