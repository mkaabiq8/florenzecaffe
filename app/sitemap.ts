import type { MetadataRoute } from "next";
import { locales, localeHref } from "@/lib/i18n";
import { site } from "@/lib/site";

const paths = ["/", "/menu"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}${localeHref(locale, path)}`,
      lastModified: new Date(),
    }))
  );
}
