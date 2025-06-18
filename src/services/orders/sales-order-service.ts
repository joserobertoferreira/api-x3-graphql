import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';
import { commonService } from '../common/common-service';
import { getNextCounter } from '../common/sequence-number-service';

interface SalesOrderSequenceNumber {
  orderType: string;
  legislation: string;
  salesSite: string;
  orderDate: Date;
  complement: string;
}

export class SalesOrderService {
  constructor(private prisma: PrismaClient) {}

  async findUnique(args: Prisma.SalesOrderFindUniqueArgs) {
    return this.prisma.salesOrder.findUnique(args);
  }

  /**
   * Executa uma função dentro de uma transação de banco de dados.
   * A função recebe um cliente Prisma transacional (tx) para executar as operações.
   * Se a função falhar, a transação inteira é revertida (rollback).
   * Se for bem-sucedida, a transação é confirmada (commit).
   * @param fn A função assíncrona a ser executada na transação.
   * @returns O valor retornado pela função `fn`.
   */
  async executeInTransaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(fn);
  }

  /**
   * Obtém o próximo número de encomenda disponível.
   */
  async getNextOrderNumber(args: SalesOrderSequenceNumber): Promise<string> {
    const { orderType, legislation, salesSite, orderDate, complement } = args;

    const sequenceNumber = await commonService.getSalesOrderTypeSequenceNumber(orderType);
    if (!sequenceNumber) {
      throw new Error(`Sequence number for order type ${orderType} not found.`);
    }

    // Obtém o próximo valor do contador para o tipo de ordem
    const nextCounterValue = await getNextCounter(sequenceNumber, salesSite, orderDate, complement);

    return nextCounterValue;
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const salesOrderService = new SalesOrderService(prisma);
