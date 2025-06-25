import { Company, Prisma, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';

type FindManyCompanyArgs = Prisma.CompanyFindManyArgs;

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
  async getSiteByCode<I extends Prisma.SiteInclude>(
    code: string,
    include?: I,
  ): Promise<Prisma.SiteGetPayload<{ include: I }> | null> {
    try {
      const site = await this.prisma.site.findUnique({
        where: { siteCode: code },
        include,
      });

      return site as Prisma.SiteGetPayload<{ include: I }> | null;
    } catch (error) {
      console.error('Erro ao buscar site por ID:', error);
      throw new Error('Não foi possível buscar o site.');
    }
  }

  /**
   * Busca uma lista de empresas com base em um filtro opcional
   * @param filter Filtro opcional para buscar empresas
   * @returns Lista de empresas que atendem ao filtro
   */
  async findMany(args?: FindManyCompanyArgs): Promise<Company[]> {
    try {
      return await this.prisma.company.findMany(args);
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      throw new Error('Não foi possível buscar as empresas.');
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const companyService = new CompanyService(prisma);
