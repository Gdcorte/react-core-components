export class NumberUtils {
  static safeDivision(numerator: number, denominator: number): number {
    if (denominator === 0) return numerator;

    return numerator / denominator;
  }

  static roundToDecimal(number: number, decimalPlaces: number) {
    const correction = Math.pow(10, decimalPlaces);
    return Math.round(number * correction) / correction;
  }

  static strToFloat(value: string): number {
    return parseFloat(value) || 0;
  }

  static parseDecimalRelative(
    value: string,
    isPercent: boolean = true,
  ): string {
    let percent = parseFloat(value);

    if (isPercent) {
      percent /= 100;
    }

    return percent.toFixed(4);
  }

  static parseDecimalPercentage(
    value: string,
    isRelative: boolean = true,
  ): string {
    let percent = parseFloat(value);

    if (isRelative) {
      percent *= 100;
    }

    return percent.toFixed(2);
  }
}
