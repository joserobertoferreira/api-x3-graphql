import { Decimal } from '@prisma/client/runtime/library';

interface TotalOptions<T> {
  ignoreInvalid?: boolean; // Se true, ignora valores inválidos ao somar
  multiplier?: boolean;
  multiplierKey?: keyof T;
}

/**
 * Converte um valor para uma instância segura de Decimal.
 * @param value - O valor a ser normalizado, que pode ser um Decimal, número ou string.
 * @returns Uma instância de Decimal, se for um valor inválido retorna 0.
 */
export function normalizeDecimal(value: Decimal | number | string): Decimal {
  if (value instanceof Decimal) return value;

  try {
    const d = new Decimal(value);
    return d.isFinite() ? d : new Decimal(0);
  } catch {
    return new Decimal(0);
  }
}

/**
 * Faz a soma da chave informada de um array de objetos.
 * @param array - O array de objetos a ser somado.
 * @param key - A chave do objeto que será somada.
 * @param options Opções adicionais para a soma.
 * @returns A soma dos valores da chave especificada, ou 0 se o array estiver vazio ou a chave não existir.
 */
export function totalValuesByKey<T>(array: T[], key: keyof T, options: TotalOptions<T> = {}): Decimal {
  const { ignoreInvalid = false, multiplier = false, multiplierKey } = options;

  // Se o modo de multiplicação está ativo, a chave do multiplicador é obrigatória.
  if (multiplier && !multiplierKey) {
    throw new Error('The "multiplierKey" option is required when "multiplier" is true.');
  }

  return array.reduce((sum: Decimal, item, index) => {
    const value = item[key];

    if (value === undefined || value === null) {
      if (ignoreInvalid) return sum;
      throw new Error(`Value for key "${String(key)}" is undefined or null at index ${index}.`);
    }

    try {
      const decimalValue = normalizeDecimal(value as any);

      if (multiplier) {
        if (multiplierKey === undefined) {
          if (ignoreInvalid) return sum;
          throw new Error(`Multiplier key is undefined at item index ${index}.`);
        }
        const multiplyBy = item[multiplierKey];

        if (multiplyBy === undefined || multiplyBy === null) {
          if (ignoreInvalid) return sum;
          throw new Error(`Multiplier value missing for key "${String(multiplierKey)}" at item index ${index}.`);
        }

        const multiplyByNormalized = normalizeDecimal(multiplyBy as any);
        const product = decimalValue.mul(multiplyByNormalized);

        return sum.add(product);
      } else {
        return sum.add(decimalValue);
      }
    } catch (error) {
      if (ignoreInvalid) return sum;

      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Conversion error at item index ${index} for key "${String(key)}": ${errorMessage}`);
    }
  }, new Decimal(0));
}
