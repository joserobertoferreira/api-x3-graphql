import { Company, Prisma, PrismaClient, Site } from '@prisma/client';
import prisma from '../../database/config';

export class CompanyService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Busca uma empresa pelo código
   * @param code Código da empresa
   * @param include Objeto para incluir relações, como sites. Ex: { sites: true }
   * @returns A empresa encontrada ou null se não existir.
   */
  async getCompanyByCode(code: string, include?: Prisma.CompanyInclude): Promise<Company | null> {
    try {
      return await this.prisma.company.findUnique({
        where: { company: code },
        include,
      });
    } catch (error) {
      console.error('Erro ao buscar empresa por código:', error);
      throw new Error('Não foi possível buscar a empresa.');
    }
  }

  /**
   * Busca um site pelo código
   * @param code Código do site
   * @param include Objeto para incluir relações, como empresa. Ex: { company: true }
   * @returns O site encontrado ou null se não existir.
   */
  async getSiteByCode(code: string, include?: Prisma.SiteInclude): Promise<Site | null> {
    try {
      return await this.prisma.site.findUnique({
        where: { siteCode: code },
        include,
      });
    } catch (error) {
      console.error('Erro ao buscar site por ID:', error);
      throw new Error('Não foi possível buscar o site.');
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const companyService = new CompanyService(prisma);
