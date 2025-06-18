import { OrderType, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';

export class CommonService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Busca o tipo de ordem
   * @param orderType Tipo de ordem
   * @param legislation Legislação
   * @returns O objeto OrderType encontrado ou null se não existir.
   */
  async getSalesOrderType(orderType: string, legislation: string): Promise<OrderType | null> {
    try {
      return await this.prisma.orderType.findUnique({
        where: { orderType_legislation: { orderType, legislation } },
      });
    } catch (error) {
      console.error('Erro ao buscar tipo de ordem:', error);
      throw new Error('Não foi possível buscar o tipo de ordem.');
    }
  }

  /**
   * Retorna o sequence number para o tipo de ordem informado
   * @param orderType Tipo de ordem
   * @returns O sequence number ou null se não encontrado.
   */
  async getSalesOrderTypeSequenceNumber(orderType: string): Promise<string | null> {
    console.log('Buscando sequence number para o tipo de ordem:', orderType);
    try {
      const orderTypeObj = await this.getSalesOrderType(orderType, '');

      return orderTypeObj?.sequenceNumber ?? null;
    } catch (error) {
      console.error('Erro ao buscar o contador para o tipo de ordem:', error);
      throw new Error('Não foi possível buscar o contador para o tipo de ordem.');
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const commonService = new CommonService(prisma);
