/**
 * Metodo responsavel por recuperar um numero seguro para utilizar como divisor
 * @param number
 */
export const getSafeDivider = (number: number): number =>
  number > 0 ? number : 1;

export const getPercent = (value: number, divider: number): number => {
  return parseInt(((value / getSafeDivider(divider)) * 100).toFixed(2));
};
