import { PrismaClient } from '@prisma/client';
import { generateUUIDBuffer, getAuditTimestamps } from '../../utils/audit-dates';
import { DEFAULT_LEGACY_DATE } from '../../utils/constants-utils';
import { LocalMenus } from '../../utils/enum/local-menus';

interface GetNextCounterValueOptions {
  siteOrCompany?: string;
  period?: number;
  complement?: string;
  length?: number; // Comprimento para o preenchimento de zeros
}

export async function getNextCounter(
  counterCode: string,
  site: string = '',
  date: Date = DEFAULT_LEGACY_DATE,
  comp: string = '',
): Promise<string> {
  const prisma = new PrismaClient();

  try {
    // Attempts to get the counter definition
    const counterData = await prisma.documentNumbers.findUnique({
      where: { sequenceCode: counterCode },
    });

    if (!counterData) {
      throw new Error(`Contador ${counterCode} não encontrado.`);
    }

    // Transform the componentType, componentLength and constants into arrays for easier access
    const componentTypes: number[] = [];
    const componentLengths: number[] = [];
    const constants: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const type = `componentType${i}`;
      const length = `componentLength${i}`;
      const constant = `constants${i}`;

      if (counterData[type as keyof typeof counterData] !== undefined) {
        componentTypes.push(counterData[type as keyof typeof counterData] as number);
      }
      if (counterData[length as keyof typeof counterData] !== undefined) {
        componentLengths.push(counterData[length as keyof typeof counterData] as number);
      }
      if (counterData[constant as keyof typeof counterData] !== undefined) {
        constants.push(counterData[constant as keyof typeof counterData] as string);
      }
    }

    const index = componentTypes.indexOf(8);

    if (index === -1) {
      return '';
    }

    const lengthOfSequence: number = componentLengths[index] || 1;

    if (componentTypes.indexOf(9) !== -1) {
      comp = '';
    }

    let finalCounter = '';

    try {
      const period = _determineThePeriod(counterData.rtzLevel, date);
      const siteOrSociety = _determineSiteOrSociety(counterData.definitionLevel, site);
      const counter = await _createNextCounter(prisma, counterCode, siteOrSociety, period, comp, lengthOfSequence);

      // Generate the final counter string
      if (counter) {
        finalCounter = _attribNumber(
          counter,
          componentTypes,
          componentLengths,
          constants,
          counterData.numberOfComponents,
          counterData.chronologicalControl,
          counterData.type,
          date,
          siteOrSociety,
          comp,
        );
      }
    } catch (e) {
      console.error(`Erro ao obter próximo editor_id: ${e}`);
      throw e;
    }

    return finalCounter;
  } catch (e) {
    console.error(`Erro ao obter código do contador: ${e}`);
    return '';
  }
}

function _attribNumber(
  counter: string,
  counterTypes: number[],
  counterLengths: number[],
  counterConstants: string[],
  totalComponents: number,
  chrono: number,
  typ: number,
  date: Date,
  site: string,
  complement: string,
): string {
  let valeur = '';

  for (let i = 0; i < totalComponents; i++) {
    const postTyp = counterTypes[i] || 0;
    const postLng = counterLengths[i] || 0;

    if (postTyp === 0) {
      break;
    }

    switch (postTyp) {
      case LocalMenus.Chapter47.CONSTANT:
        valeur += counterConstants[i] || '';
        break;
      case LocalMenus.Chapter47.YEAR:
        valeur += _forYear(postLng, date);
        break;
      case LocalMenus.Chapter47.MONTH:
        valeur += _forMonth(postLng, date);
        break;
      case LocalMenus.Chapter47.WEEK:
        valeur += date.getWeek().toString().padStart(2, '0');
        break;
      case LocalMenus.Chapter47.DAY:
        valeur += _forDay(postLng, date);
        break;
      case LocalMenus.Chapter47.COMPANY:
      case LocalMenus.Chapter47.SITE:
        valeur += _forSiteOrCompany(chrono, postLng, site);
        break;
      case LocalMenus.Chapter47.SEQUENCE_NUMBER:
        valeur += counter;
        break;
      case LocalMenus.Chapter47.COMPLEMENT:
        valeur += _forComplement(postLng, complement);
        break;
    }
  }

  if (typ === LocalMenus.Chapter46.NUMERIC) {
    valeur = parseInt(valeur).toString();
  }

  return valeur;
}

function _forComplement(posLng: number, complement: string): string {
  return posLng == 0 ? complement : complement.substring(0, posLng);
}

function _forSiteOrCompany(ctlchr: number, posLng: number, siteOrSociety: string): string {
  if (siteOrSociety.length < posLng && ctlchr === 2) {
    return siteOrSociety + '_'.repeat(posLng - siteOrSociety.length);
  }
  return siteOrSociety.substring(0, posLng);
}

function _forYear(index: number, date: Date): string {
  switch (index) {
    case 1:
      return _determineThePeriod(99, date).toString();
    case 2:
      return _determineThePeriod(LocalMenus.Chapter48.ANNUAL, date).toString().padStart(2, '0');
    case 4:
      return date.getFullYear().toString();
    default:
      return '';
  }
}

function _forMonth(index: number, date: Date): string {
  if (index === 2) {
    return (date.getMonth() + 1).toString().padStart(2, '0');
  } else if (index === 3) {
    return date.toLocaleString('default', { month: 'short' }).toUpperCase();
  }
  return '';
}

function _forDay(index: number, date: Date): string {
  if (index === 1) {
    return date.getDay().toString().padStart(2, '0');
  } else if (index === 2) {
    return date.getDate().toString().padStart(2, '0');
  } else if (index === 3) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    return day.toString().padStart(3, '0');
  }
  return '';
}

async function _createNextCounter(
  prisma: PrismaClient,
  counterCode: string,
  site: string,
  period: number,
  complement: string,
  length: number,
): Promise<string> {
  if (!site) site = '';
  if (!period) period = 0;
  if (!complement) complement = '';
  if (!length) length = 1;

  // Using transaction for atomic operation
  return await prisma.$transaction(async (tx) => {
    // Find current value
    const currentRecord = await tx.sequenceNumbers.findUnique({
      where: {
        sequenceNumber_siteOrCompany_period_complement: {
          sequenceNumber: counterCode,
          siteOrCompany: site,
          period: period,
          complement: complement,
        },
      },
    });

    let currentValue = currentRecord ? Number(currentRecord.sequenceValue) : 0;
    const nextValue = currentValue + 1;
    const timestamps = getAuditTimestamps();

    if (currentValue > 0) {
      // Update existing record
      await tx.sequenceNumbers.update({
        where: {
          sequenceNumber_siteOrCompany_period_complement: {
            sequenceNumber: counterCode,
            siteOrCompany: site,
            period: period,
            complement: complement,
          },
        },
        data: {
          sequenceValue: nextValue,
          updateDatetime: timestamps.dateTime,
        },
      });
    } else {
      const headerUUID = generateUUIDBuffer();

      // Create new record
      await tx.sequenceNumbers.create({
        data: {
          sequenceNumber: counterCode,
          siteOrCompany: site,
          period: period,
          complement: complement,
          sequenceValue: nextValue,
          updateDatetime: timestamps.dateTime,
          createDatetime: timestamps.dateTime,
          singleID: headerUUID,
        },
      });
    }

    const formattedId = currentValue.toString().padStart(length, '0');
    console.log(`Próximo valor do contador ${counterCode} é ${formattedId}`);

    if (formattedId.length > length) {
      throw new Error(`Próximo valor do contador ${currentValue} excede ${length} dígitos.`);
    }

    return formattedId;
  });
}

function _determineThePeriod(razLevel: number, date: Date): number {
  switch (razLevel) {
    case LocalMenus.Chapter48.NO_RTZ:
      return 0;
    case LocalMenus.Chapter48.ANNUAL:
      return date.getFullYear() % 100;
    case LocalMenus.Chapter48.MONTHLY:
      return 100 * (date.getFullYear() % 100) + (date.getMonth() + 1);
    case 99:
      return date.getFullYear() % 10;
    default:
      return 0;
  }
}

function _determineSiteOrSociety(defLevel: number, site: string): string {
  switch (defLevel) {
    case LocalMenus.Chapter45.FOLDER:
      return '';
    case LocalMenus.Chapter45.COMPANY:
      // Implement company logic here
      return '';
    case LocalMenus.Chapter45.SITE:
      return site;
    default:
      return '';
  }
}

// Extend Date prototype for getWeek function
declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function () {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

// /**
//  * Obtém e atualiza o próximo valor de um contador específico.
//  * Esta função tenta simular o comportamento de SELECT FOR UPDATE e é transacional.
//  *
//  * @param prisma Instância do PrismaClient.
//  * @param sequenceNumber O código do contador (CODNUM_0).
//  * @param options Opções como site, período, complemento e comprimento desejado do número.
//  * @returns Uma string representando o próximo valor formatado do contador.
//  * @throws Error se o contador não puder ser atualizado ou se o valor exceder o comprimento.
//  */
// export async function getNextCounterValue(
//   prisma: PrismaClient,
//   sequenceNumber: string,
//   options: GetNextCounterValueOptions = {},
// ): Promise<string> {
//   const {
//     siteOrCompany = '',
//     period = 0,
//     complement = '',
//     length = 1, // Comprimento padrão do número formatado
//   } = options;

//   // Usamos uma transação para garantir atomicidade
//   return prisma.$transaction(
//     async (tx) => {
//       // Passo 1: Tentar obter o valor atual do contador.
//       // O Prisma não tem um "SELECT FOR UPDATE" direto que funcione em todas as DBs da mesma forma.
//       // Para o SQL Server, o isolation level da transação pode ajudar.
//       // Alternativamente, poderíamos usar $queryRawUnsafe para um SELECT com hints de locking.
//       // Por agora, vamos confiar no nível de isolamento padrão da transação do Prisma.

//       const counterRecord = await tx.sequenceNumbers.findUnique({
//         where: {
//           sequenceNumber_siteOrCompany_period_complement: {
//             sequenceNumber,
//             siteOrCompany,
//             period,
//             complement,
//           },
//         },
//       });

//       let sequenceValue: number;
//       if (counterRecord === null) {
//         sequenceValue = 0; // Se não existe, o primeiro valor a ser usado será 1
//       } else {
//         sequenceValue = parseInt(counterRecord.sequenceValue.toString());
//       }

//       const nextValue = sequenceValue + 1;

//       // Passo 2: Atualizar ou Inserir o contador
//       const auditData = getAuditTimestamps();
//       const uuid = generateUUIDBuffer();

//       if (counterRecord) {
//         // Contador existe, então UPDATE
//         try {
//           await tx.sequenceNumbers.update({
//             where: {
//               sequenceNumber_siteOrCompany_period_complement: {
//                 sequenceNumber,
//                 siteOrCompany,
//                 period,
//                 complement,
//               },
//             },
//             data: {
//               sequenceValue: nextValue,
//               UPDDATTIM_0: auditData.dateTime,
//             },
//           });
//         } catch (e: any) {
//           // Log detalhado do erro pode ser útil aqui
//           console.error(`Erro ao atualizar o contador ${sequenceNumber}:`, e);
//           throw new Error(`Erro ao atualizar o contador ${sequenceNumber}. Detalhes: ${e.message}`);
//         }
//       } else {
//         // Contador não existe, então INSERT
//         try {
//           await tx.sequenceNumbers.create({
//             data: {
//               sequenceNumber,
//               siteOrCompany,
//               period,
//               complement,
//               sequenceValue: nextValue, // Guardamos o valor que *será usado*
//               CREDATTIM_0: auditData.dateTime,
//               UPDDATTIM_0: auditData.dateTime,
//               AUUID_0: uuid,
//             },
//           });
//         } catch (e: any) {
//           // Log detalhado do erro
//           console.error(`Erro ao inserir o contador ${sequenceNumber}:`, e);
//           throw new Error(`Erro ao inserir o contador ${sequenceNumber}. Detalhes: ${e.message}`);
//         }
//       }

//       // Passo 3: Formatar o ID
//       // Usaremos o `currentValue` para gerar o ID atual (que era `nextValue -1`)
//       // ou se o registo não existia, o `currentValue` era 0, então o ID é 1.
//       // A sua lógica Python retorna o `current_value` antes do incremento para a formatação.
//       const valueToFormat = counterRecord === null ? 1 : sequenceValue + 1;

//       // Corrigindo para usar o valor que foi efetivamente gravado ou o primeiro valor (1)
//       const formattedId = valueToFormat.toString().padStart(length, '0');

//       if (formattedId.length > length) {
//         // Este erro fará o rollback da transação
//         throw new Error(
//           `Próximo valor (${valueToFormat}) para o contador ${sequenceNumber} excede o comprimento máximo de ${length} dígitos.`,
//         );
//       }

//       console.log(
//         `Próximo valor para ${sequenceNumber} (Site: ${siteOrCompany}, Período: ${period}, Comp: ${complement}) é ${formattedId}`,
//       );
//       return formattedId; // Retorna o valor que foi usado (o `currentValue` antes do incremento)
//     },
//     {
//       // Definir o nível de isolamento pode ser crucial para concorrência
//       // Para SQL Server, Serializable pode ser o mais próximo do "SELECT FOR UPDATE"
//       // mas pode ter implicações de performance. Teste bem!
//       isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // ou ReadCommitted, RepeatableRead
//       maxWait: 5000, // Tempo máximo de espera para a transação (ms)
//       timeout: 10000, // Tempo máximo de execução da transação (ms)
//     },
//   );
// }
