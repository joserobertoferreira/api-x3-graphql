import { Prisma, PrismaClient } from '@prisma/client';

export class TransactionService {
  constructor(private prisma: PrismaClient) {}

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
