// Locale configuration and small shared UI strings.
// English is the default locale and is served unprefixed ("/", "/menu").
// Greek is served under a "/el" prefix ("/el", "/el/menu").
// See proxy.ts for the routing/rewrite logic that makes this work.

export const locales = ["en", "el"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Build an href for `path` in the given locale.
 * English (default) is never prefixed; Greek is prefixed with /el.
 *   localeHref("en", "/menu")  -> "/menu"
 *   localeHref("el", "/menu")  -> "/el/menu"
 *   localeHref("el", "/")      -> "/el"
 */
export function localeHref(locale: Locale, path: string = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strip a locale prefix from a pathname, returning the plain content path. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(`/${locale}`.length);
  }
  return pathname;
}

export type LocalizedText = Record<Locale, string>;

// Nav links shared between the header Nav and the Footer.
export const nav: Record<
  Locale,
  { story: string; menu: string; gallery: string; visit: string }
> = {
  en: { story: "Our Story", menu: "Menu", gallery: "Gallery", visit: "Visit Us" },
  el: { story: "Η Ιστορία μας", menu: "Μενού", gallery: "Γκαλερί", visit: "Επισκεφθείτε μας" },
};

// Small bits of shared/generic UI copy.
export const ui: Record<
  Locale,
  {
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    downloadPdf: string;
    languageName: string;
    switchToLabel: string;
  }
> = {
  en: {
    homeAria: "Florenze Caffè — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    downloadPdf: "Download PDF",
    languageName: "EN",
    switchToLabel: "Switch to English",
  },
  el: {
    homeAria: "Florenze Caffè — αρχική",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    downloadPdf: "Λήψη PDF",
    languageName: "ΕΛ",
    switchToLabel: "Αλλαγή σε Ελληνικά",
  },
};
