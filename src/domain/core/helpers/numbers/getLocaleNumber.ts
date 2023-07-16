export default function getLocaleNumber(
  value: number,
  currency = 'BRL',
  locale = 'pt-BR'
): string {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
  }).format(value);
}
