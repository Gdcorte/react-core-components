import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "en", "ja"] as const;
export type SupportedLocales = (typeof locales)[number];

export function isSupportedLocale(option: unknown): option is SupportedLocales {
  return locales.includes(option as SupportedLocales);
}

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
});
