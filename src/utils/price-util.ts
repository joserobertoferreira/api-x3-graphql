import { Decimal } from '@prisma/client/runtime/library';

type CalculatedPrice = {
  priceWithTax: Decimal;
  priceWithoutTax: Decimal;
  taxValue: Decimal;
};

/**
 * Calculates the net price, VAT value, and gross price based on the provided parameters.
 * @param price Gross price
 * @param type 1 | 2 (1 = without VAT, 2 = with VAT)
 * @param taxRate VAT percentage
 * @returns
 */
export function calculatePrice(price: number, type: number, taxRate: number): CalculatedPrice {
  let netPrice: Decimal;
  let tax: Decimal;
  let grossPrice: Decimal;

  if (price === undefined || price === null) {
    price = 0;
  }

  grossPrice = new Decimal(price);

  if (type === 1) {
    // Preço sem IVA
    netPrice = grossPrice;
    tax = grossPrice.mul(taxRate).div(100);
    grossPrice = grossPrice.add(tax);
  } else if (type === 2) {
    // Preço com IVA
    const divider = new Decimal(1).plus(new Decimal(taxRate).div(100));
    netPrice = grossPrice.div(divider);
    tax = grossPrice.minus(netPrice);
  } else {
    throw new Error('Tipo de preço inválido. Use 1 (sem IVA) ou 2 (com IVA).');
  }

  return {
    priceWithoutTax: netPrice.toDecimalPlaces(3),
    taxValue: tax.toDecimalPlaces(0, Decimal.ROUND_HALF_FLOOR),
    priceWithTax: grossPrice.toDecimalPlaces(3),
  };
}
