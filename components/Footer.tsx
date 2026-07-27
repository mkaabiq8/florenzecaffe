import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { localeHref, nav as navDict, type Locale } from "@/lib/i18n";

const copyright: Record<Locale, (year: number) => string> = {
  en: (year) => `© ${year} Florenze Caffè · Nicosia, Cyprus`,
  el: (year) => `© ${year} Florenze Caffè · Λευκωσία, Κύπρος`,
};

export default function Footer({ locale }: { locale: Locale }) {
  const t = navDict[locale];

  return (
    <footer className="bg-roast text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/logo-light.png"
            alt="Florenze Caffè"
            width={200}
            height={67}
            className="h-14 w-auto opacity-90"
          />
          <p className="font-display text-lg italic text-cream/70">
            {site.tagline[locale]}
          </p>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-cream/70">
            <Link
              href={`${localeHref(locale, "/")}#about`}
              className="transition-colors hover:text-goldlight"
            >
              {t.story}
            </Link>
            <Link
              href={localeHref(locale, "/menu")}
              className="transition-colors hover:text-goldlight"
            >
              {t.menu}
            </Link>
            <Link
              href={`${localeHref(locale, "/")}#gallery`}
              className="transition-colors hover:text-goldlight"
            >
              {t.gallery}
            </Link>
            <Link
              href={`${localeHref(locale, "/")}#visit`}
              className="transition-colors hover:text-goldlight"
            >
              {t.visit}
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-goldlight"
            >
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-goldlight"
            >
              Facebook
            </a>
          </nav>

          <p className="text-xs font-light text-cream/50">
            {site.address[locale]} ·{" "}
            <a href={site.phoneHref} className="hover:text-goldlight">
              {site.phone}
            </a>
          </p>

          <div className="mt-2 h-px w-24 bg-gold/40" />
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-cream/40">
            {copyright[locale](new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}
