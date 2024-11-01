export class CaseFormatting {
  static camelToSnake(value: string): string {
    return value.replace(/([A-Z])/g, '_$1').toLowerCase();
  }

  static pascalToSnake(value: string): string {
    return this.camelToSnake(value).replace(/^_/, '');
  }

  static camelToPascal(value: string) {
    return value.replace(/^./, value[0].toUpperCase());
  }

  static snakeToCamel(value: string): string {
    return value.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  static snakeToPascal(value: string) {
    return this.camelToPascal(this.snakeToCamel(value));
  }
}
