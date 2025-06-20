import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';
import { CreateAnalyticalAccountingLineInput } from '../../graphql/inputs/analytical-accounting-input';
import { generateUUIDBuffer, getAuditTimestamps } from '../../utils/audit-dates';

export class GeneralAccountingService {
  constructor(private prisma: PrismaClient) {}

  async createLine(input: CreateAnalyticalAccountingLineInput) {
    const timestamps = getAuditTimestamps();
    const uuid = generateUUIDBuffer();

    return this.prisma.analyticalAccountingLines.create({
      data: {
        ...input,
        createDatetime: timestamps.dateTime,
        updateDatetime: timestamps.dateTime,
        singleID: uuid,
      },
    });
  }

  async findLineById(rowId: bigint) {
    return this.prisma.analyticalAccountingLines.findUnique({
      where: { ROWID: rowId },
    });
  }

  async findLineByKey(key: {
    abbreviation: string;
    typ: number;
    document: string;
    lineNumber: number;
    sequenceNumber: number;
    keyComplement: string;
    sortValue: number;
  }) {
    return this.prisma.analyticalAccountingLines.findUnique({
      where: {
        abbreviation_typ_document_lineNumber_sequenceNumber_keyComplement_sortValue: key,
      },
    });
  }

  // Read All (com paginação e filtros - pode ser adicionado depois)
  async findAllLines(args?: Prisma.AnalyticalAccountingLinesFindManyArgs) {
    return this.prisma.analyticalAccountingLines.findMany(args);
  }

  // UPDATE
  // async updateLine(rowId: bigint, input: UpdateAnalyticalAccountingLineInput) {
  //     const timestamps = getAuditTimestamps();
  //     return this.prisma.analyticalAccountingLines.update({
  //         where: { ROWID: rowId },
  //         data: {
  //             ...input,
  //             // updateDatetime: timestamps.dateTime,
  //             // updateUser: 'API_USER',
  //             // Incrementar UPDTICK_0 se necessário manualmente
  //             // UPDTICK_0: { increment: 1 } // Se não for automático
  //         },
  //     });
  // }

  // DELETE
  // async deleteLine(rowId: bigint) {
  //     return this.prisma.analyticalAccountingLines.delete({
  //         where: { ROWID: rowId },
  //     });
  // }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const generalAccountingService = new GeneralAccountingService(prisma);
