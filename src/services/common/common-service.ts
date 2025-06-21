import { OrderType, Prisma, PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import prisma from '../../database/config';

export interface Ledgers {
  LED_0: string;
  LED_1: string;
  LED_2: string;
  LED_3: string;
  LED_4: string;
  LED_5: string;
  LED_6: string;
  LED_7: string;
  LED_8: string;
  LED_9: string;
}

interface TabRatVatRecord {
  STRDAT_0: Date;
  VATRAT_0: Decimal;
}

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

  /**
   * Retorna os dados do referencial
   * @param companyId ID da empresa
   * @returns Lista com os dados do referencial ou uma lista vazia se não encontrado.
   */
  async getLedgers(companyId: string): Promise<Ledgers[]> {
    console.log('Buscar dados do referencial para a empresa:', companyId);

    const dbSchema = process.env.DB_SCHEMA;

    if (!dbSchema) {
      console.error('Erro: Variável de ambiente DB_SCHEMA não está definida.');
      return [];
    }

    try {
      const results: Ledgers[] = await this.prisma.$queryRaw(
        Prisma.sql`
          SELECT LED_0,LED_1,LED_2,LED_3,LED_4,LED_5,LED_6,LED_7,LED_8,LED_9
          FROM ${Prisma.raw(dbSchema)}.GACM WHERE GCM_0= ${companyId}
        `,
      );

      return results.length > 0 ? results : [];
    } catch (error) {
      console.error('Erro ao buscar dados do referencial:', error);
      return [];
    }
  }

  /**
   * Retorna o plano de contas para o referencial informado
   * @param ledger Referencial
   * @returns O código do plano ou null se não encontrado.
   */
  async getChartCode(ledger: string): Promise<string | null> {
    console.log('Buscar plano de contas para o referencial:', ledger);

    const dbSchema = process.env.DB_SCHEMA;

    if (!dbSchema) {
      console.error('Erro: Variável de ambiente DB_SCHEMA não está definida.');
      return null;
    }

    try {
      const results: { COA_0: string }[] = await this.prisma.$queryRaw(
        Prisma.sql`
          SELECT COA_0 FROM ${Prisma.raw(dbSchema)}.GLED WHERE GCM_0 = ${ledger}`,
      );

      return results[0]?.COA_0 ?? null;
    } catch (error) {
      console.error('Erro ao buscar plano de contas do referencial:', error);
      return null;
    }
  }

  /**
   * Retorna uma lista de planos de contas para a lista de referenciais informados
   * @param ledgers Lista de referenciais
   * @returns Lista de códigos de planos ou uma lista vazia se não encontrado.
   */
  async getChartCodes(ledgers: Ledgers[]): Promise<string[]> {
    console.log('Buscar planos de contas para os referenciais:', ledgers);
    if (ledgers.length === 0) return [];

    const ledgerProperties = Object.keys({} as Ledgers) as Array<keyof Ledgers>;

    try {
      const allPromises = ledgers.flatMap((ledger) =>
        ledgerProperties.map(async (property) => {
          const ledgerValue = ledger[property];
          return ledgerValue ? await this.getChartCode(ledgerValue) : null;
        }),
      );

      const chartCodes = await Promise.all(allPromises);
      return chartCodes.filter((code): code is string => !!code);
    } catch (error) {
      console.error('Erro ao buscar planos de contas dos referenciais:', error);
      return [];
    }
  }

  /**
   * Encontra a taxa de IVA (VATRAT_0) aplicável para uma determinada chave e data de referência.
   *
   * @param vatCode - O código do IVA (VAT_0).
   * @param referenceDate - A data para a qual a taxa deve ser encontrada.
   * @returns A taxa de IVA (VATRAT_0) aplicável ou null se nenhuma for encontrada.
   */
  async getTaxRate(vatCode: string, referenceDate: Date): Promise<Decimal | null> {
    const dbSchema = process.env.DB_SCHEMA;

    if (!dbSchema) {
      console.error('Erro: Variável de ambiente DB_SCHEMA não está definida.');
      throw new Error('Configuração de schema do banco de dados em falta.');
    }

    let lastReadVatRate: Decimal | null = null;

    // Para garantir que estamos a comparar apenas a parte da data
    // e evitar problemas com fuso horário/horas, convertemos referenceDate para o início do dia em UTC.
    const refDateStartOfDay = new Date(
      Date.UTC(referenceDate.getUTCFullYear(), referenceDate.getUTCMonth(), referenceDate.getUTCDate()),
    );

    try {
      const results: TabRatVatRecord[] = await this.prisma.$queryRaw<TabRatVatRecord[]>(
        Prisma.sql`
          SELECT STRDAT_0, VATRAT_0
          FROM ${Prisma.raw(dbSchema)}.TABRATVAT
          WHERE VAT_0 = ${vatCode}
          ORDER BY VAT_0, LEG_0, CPY_0, STRDAT_0
        `,
      );

      if (results.length === 0) {
        return null;
      }

      let testDate: Date | null = null;

      for (const record of results) {
        lastReadVatRate = new Decimal(record.VATRAT_0); // Guardar sempre a última taxa lida

        // Normalizar STRDAT_0 para o início do dia em UTC para comparação consistente
        const recordStrDatStartOfDay = new Date(
          Date.UTC(record.STRDAT_0.getUTCFullYear(), record.STRDAT_0.getUTCMonth(), record.STRDAT_0.getUTCDate()),
        );

        if (testDate === null) {
          testDate = recordStrDatStartOfDay;
        } else {
          if (refDateStartOfDay >= testDate && refDateStartOfDay < recordStrDatStartOfDay) {
            return lastReadVatRate;
          } else {
            testDate = recordStrDatStartOfDay;
          }
        }
      }
      return lastReadVatRate;
    } catch (error) {
      console.error('Erro ao buscar ou processar taxas de IVA:', error);
      throw error;
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const commonService = new CommonService(prisma);
