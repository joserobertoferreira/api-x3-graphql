import { Prisma, PrismaClient, Site } from '@prisma/client';
import prisma from '../../database/config';

export class SiteService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Retrieves a list of sites based on an optional filter
   * @param filter Optional filter to search for sites
   * @returns List of sites matching the filter
   */
  async findMany(filter?: Prisma.SiteWhereInput): Promise<Site[]> {
    try {
      return await this.prisma.site.findMany({
        where: filter,
        orderBy: { siteCode: 'asc' },
      });
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw new Error('Unable to fetch companies.');
    }
  }

  /**
   * Finds a single site by its code
   * @param siteCode Code of the site to be searched
   * @returns Site corresponding to the provided code or null if not found
   */
  async findUnique(siteCode: string): Promise<Site | null> {
    try {
      return await this.prisma.site.findUnique({
        where: { siteCode },
      });
    } catch (error) {
      console.error('Error fetching the site:', error);
      throw new Error('Unable to fetch the site.');
    }
  }
}

export const siteService = new SiteService(prisma);
