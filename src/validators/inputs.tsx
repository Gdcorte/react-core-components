export function validatePercentageValue(value: string) {
  let numericValue = parseFloat(value);

  if (numericValue < 0 || numericValue > 100) {
    return false;
  }

  return true;
}
