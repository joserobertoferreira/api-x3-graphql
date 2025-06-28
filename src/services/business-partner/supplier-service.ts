import { Prisma, PrismaClient, Supplier } from '@prisma/client';
import prisma from '../../database/config';

export class SupplierService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Retrieves a list of suppliers based on an optional filter
   * @param filter Optional filter to search for suppliers
   * @returns List of suppliers matching the filter
   */
  async findMany(filter?: Prisma.SupplierWhereInput, take: number = 100, skip: number = 0): Promise<Supplier[]> {
    try {
      return await this.prisma.supplier.findMany({
        where: filter,
        take: take,
        skip: skip,
        orderBy: { supplierCode: 'asc' },
      });
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      throw new Error('Unable to fetch suppliers.');
    }
  }

  /**
   * Finds a single supplier by its code
   * @param supplierCode Code of the supplier to be searched
   * @returns Supplier corresponding to the provided code or null if not found
   */
  async findUnique(supplierCode: string): Promise<Supplier | null> {
    try {
      return await this.prisma.supplier.findUnique({
        where: { supplierCode },
      });
    } catch (error) {
      console.error('Error fetching the supplier:', error);
      throw new Error('Unable to fetch the supplier.');
    }
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
}

export const supplierService = new SupplierService(prisma);
