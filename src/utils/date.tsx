import { NumberUtils } from './number';

export class UtcDateAsLocal {
  static now() {
    const localDate = new Date();
    const tzOffset = 1000 * localDate.getTimezoneOffset() * 60;
    const offsetDate = localDate.getTime() + tzOffset;
    const utcDate = new Date(offsetDate);

    return utcDate;
  }

  static parseAge(date: Date) {
    let today = new Date();

    // let date_broken = birth_date.split('-')
    const agePieces = {
      year: today.getFullYear() - date.getFullYear(),
      month: (today.getMonth() - date.getMonth()) / 12,
      day: (today.getDate() - date.getDate()) / 365,
    };

    let age = agePieces.year + agePieces.month + agePieces.day;
    return NumberUtils.roundToDecimal(age, 2);
  }

  static datefy(value: string): Date {
    if (value.split('.').length >= 2) {
      value = `${value.split('.')[0]}.000Z`;
    }

    if (value.split('T').length < 2) {
      value = `${value}T00:00:00.000Z`;
    }

    if (value.slice(-1) != 'Z') {
      value = `${value}.000Z`;
    }

    const localDate = new Date(value);
    const tzOffset = 1000 * localDate.getTimezoneOffset() * 60;
    const offsetDate = localDate.getTime() + tzOffset;
    const utcDate = new Date(offsetDate);

    return utcDate;
  }

  static timefy(time: string, date?: string): Date {
    // HH or HH:MM format
    let split = time.split(':');

    if (split.length < 3) {
      split = split.map((value) => value.padStart(2, '0'));

      while (split.length < 3) {
        split.push('00');
      }
    }

    if (!date) {
      date = UtcDateAsLocal.stringify(new Date()).split('T')[0];
    }

    split = split.fill('00', -1, 3);
    const normTime = split.join(':');

    const localDate = `${date}T${normTime}Z`;

    return UtcDateAsLocal.datefy(localDate);
  }

  static stringify(value: Date): string {
    const tzOffset = 1000 * value.getTimezoneOffset() * 60;
    const offsetDate = value.getTime() - tzOffset;
    return new Date(offsetDate).toISOString();
  }

  static stringifyDate(value: Date): string {
    const valueStr = UtcDateAsLocal.stringify(value);

    return valueStr.split('T')[0];
  }

  static stringifyTime(value: Date): string {
    const valueStr = UtcDateAsLocal.stringify(value);
    const time = valueStr.split('T')[1];

    return time.slice(0, 5);
  }

  static dateStamp(value: Date): number {
    const day = value.getDate().toString().padStart(2, '0');
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const year = value.getFullYear().toString().padStart(4, '0');

    return parseFloat(`${year}${month}${day}`);
  }
}
