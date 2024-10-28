// TODO: Do this later with more time
// import { describe, expect, test } from "vitest";
// import { UtcDate } from "./date";

// describe("UtcDate.parseAge", () => {
//   test("It will correctly calculate an age", () => {
//     const MINUS_30_YEARS = 30 * 365.6 * 24 * 60 * 60 * 1000;
//     const input = new Date(new Date().getTime() - MINUS_30_YEARS);

//     const result = UtcDate.parseAge(input);

//     expect(Math.floor(result)).toEqual(30);
//   });
// });

// describe("UtcDate.stringify", () => {
//   test("It will convert the date to a analogous ISO compliant UTC date", () => {
//     const expectedDate = "1990-11-10T09:58:00.000Z";
//     const input = new Date(1990, 10, 10, 9, 58);

//     const result = UtcDate.stringify(input);

//     expect(result).toEqual(expectedDate);
//   });
// });

// describe("UtcDate.datefy", () => {
//   function expectations(result: Date) {
//     expect(result.getFullYear()).toEqual(1990);
//     expect(result.getMonth()).toEqual(10);
//     expect(result.getDate()).toEqual(10);
//     expect(result.getHours()).toEqual(0);
//     expect(result.getMinutes()).toEqual(0);
//     expect(result.getSeconds()).toEqual(0);
//   }

//   test("It will convert a string to a date when Z is present", () => {
//     const result = UtcDate.datefy("1990-11-10T00:00:00Z");
//     expectations(result);
//   });

//   test("It will convert a string to a analogous date without Z", () => {
//     const result = UtcDate.datefy("1990-11-10T00:00:00");
//     expectations(result);
//   });

//   test("It will convert a string to a analogous date without time information", () => {
//     const result = UtcDate.datefy("1990-11-10");
//     expectations(result);
//   });

//   test("It will convert strings with ms correctly", () => {
//     const result = UtcDate.datefy("2023-06-05T08:45:51.496000");

//     expect(result).toEqual(new Date("2023-06-04T23:45:51.000Z"));
//   });
// });

// describe("UtcDate.stringifyDate", () => {
//   test("It will convert a string to a analogous date", () => {
//     const input = new Date("1990-11-10T00:00:00Z");

//     const result = UtcDate.stringifyDate(input);

//     expect(result).toEqual("1990-11-10");
//   });
// });

// describe("UtcDate.dateStamp", () => {
//   test("It return  a stamp with yyyymmdd format from a date object", () => {
//     const result = UtcDate.dateStamp(new Date("1990-11-10T00:00:00Z"));

//     expect(result).toEqual(19901110);
//   });
// });

// describe("UtcDate.timefy", () => {
//   function timeExpectations(result: Date) {
//     expect(result.getHours()).toEqual(14);
//     expect(result.getMinutes()).toEqual(32);
//     expect(result.getSeconds()).toEqual(0);
//   }

//   function expectations(result: Date) {
//     expect(result.getFullYear()).toEqual(1990);
//     expect(result.getMonth()).toEqual(10);
//     expect(result.getDate()).toEqual(10);

//     timeExpectations(result);
//   }

//   test("It return a full date with the given time (HH:MM) and base date", () => {
//     const result = UtcDate.timefy("14:32", "1990-11-10");

//     expectations(result);
//   });

//   test("It will ignore the seconds and replace it with 00", () => {
//     const result = UtcDate.timefy("14:32:50", "1990-11-10");

//     expectations(result);
//   });

//   test("It will use today date if nothing is passed", () => {
//     const result = UtcDate.timefy("14:32:50");

//     timeExpectations(result);

//     const test = UtcDate.now();
//     expect(result.getFullYear()).toEqual(test.getFullYear());
//     expect(result.getMonth()).toEqual(test.getMonth());
//     expect(result.getDate()).toEqual(test.getDate());
//   });
// });
