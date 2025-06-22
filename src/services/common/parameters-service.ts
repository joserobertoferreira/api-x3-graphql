import { ParameterValue, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';

export class ParametersService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Busca o valor para o parâmetro informado
   * @param company Sociedade
   * @param site Estabelecimento
   * @param code Código do parâmetro
   * @returns O objeto ParameterValue encontrado ou null se não existir.
   */
  async getParameterValue(company: string, site: string, code: string): Promise<ParameterValue | null> {
    try {
      return await this.prisma.parameterValue.findUnique({
        where: { company_siteOrLegislationCode_code: { company: company, siteOrLegislationCode: site, code: code } },
      });
    } catch (error) {
      console.error('Erro ao buscar valor do parâmetro:', error);
      throw new Error('Não foi possível buscar o valor do parâmetro.');
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const parametersService = new ParametersService(prisma);
