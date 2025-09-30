// -----------------------------
// Format a value as Peruvian Soles currency
// -----------------------------

export function parseSoles(value: string | number | undefined | null): string {
  if (value === undefined || value === null) {
    return 'S/. 0.00';
  }

  let num: number;

  if (typeof value === 'number') {
    num = value;
  } else {
    // Limpiar posibles símbolos de moneda y comas
    const cleanedValue = value.replace(/S\/\.?\s?/gi, '').replace(/,/g, '');
    num = parseFloat(cleanedValue);

    if (isNaN(num)) {
      // En vez de lanzar error, devolvemos 0
      num = 0;
    }
  }

  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

// -----------------------------
// Calculate the discounted price(the discount is %)
// -----------------------------

export function getDiscountedPrice(price: number, discount?: number): number {
  if (!discount || discount <= 0) return price;
  return price * (1 - discount / 100);
}

export function formatDiscount(discount?: number): string | null {
  if (!discount || discount <= 0) return null;
  return discount.toString();
}
