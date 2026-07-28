"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { locales, localeHref, stripLocale, nav as navDict, ui, type Locale } from "@/lib/i18n";

type NavLink = { key: "story" | "menu" | "gallery" | "visit"; href?: string; hash?: string };

const links: NavLink[] = [
  { key: "story", hash: "about" },
  { key: "menu", href: "/menu" },
  { key: "gallery", hash: "gallery" },
  { key: "visit", hash: "visit" },
];

function LanguageSwitch({
  locale,
  dark,
  size = "sm",
}: {
  locale: Locale;
  dark: boolean;
  size?: "sm" | "lg";
}) {
  const pathname = usePathname();
  const contentPath = stripLocale(pathname);
  const big = size === "lg";

  return (
    <div
      className={`flex items-center ${big ? "gap-2 text-sm" : "gap-1.5 text-[0.7rem]"} font-medium uppercase tracking-[0.2em]`}
    >
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && (
            <span className={`mx-1.5 ${dark ? "text-sand" : "text-cream/40"}`}>/</span>
          )}
          {loc === locale ? (
            <span className={dark ? "text-gold" : "text-goldlight"} aria-current="true">
              {ui[loc].languageName}
            </span>
          ) : (
            <Link
              href={localeHref(loc, contentPath)}
              aria-label={ui[loc].switchToLabel}
              className={`transition-colors ${
                dark ? "text-cocoa hover:text-gold" : "text-cream/80 hover:text-goldlight"
              }`}
            >
              {ui[loc].languageName}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Nav({ solid = false, locale }: { solid?: boolean; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = navDict[locale];
  const u = ui[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || scrolled;

  const hrefFor = (link: NavLink) =>
    link.href
      ? localeHref(locale, link.href)
      : `${localeHref(locale, "/")}#${link.hash}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-cream/90 backdrop-blur-md border-b border-sand/60 shadow-[0_1px_20px_rgba(46,33,26,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href={localeHref(locale, "/")} className="shrink-0" aria-label={u.homeAria}>
          <Image
            src={dark ? "/images/logo.png" : "/images/logo-light.png"}
            alt="Florenze Caffè"
            width={140}
            height={47}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={hrefFor(l)}
              className={`text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                dark ? "text-cocoa hover:text-gold" : "text-cream/90 hover:text-goldlight"
              }`}
            >
              {t[l.key]}
            </Link>
          ))}
          <LanguageSwitch locale={locale} dark={dark} />
          <a
            href={site.phoneHref}
            className={`border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
              dark
                ? "border-gold/60 text-gold hover:bg-gold hover:text-cream"
                : "border-cream/50 text-cream hover:bg-cream hover:text-espresso"
            }`}
          >
            {site.phone}
          </a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitch locale={locale} dark={dark} />

          <button
            className="p-2"
            onClick={() => setOpen(true)}
            aria-label={u.openMenu}
          >
            <span
              className={`block h-px w-6 ${dark ? "bg-espresso" : "bg-cream"}`}
            />
            <span
              className={`mt-2 block h-px w-6 ${dark ? "bg-espresso" : "bg-cream"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-espresso text-cream md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-3">
              <Image
                src="/images/logo-light.png"
                alt="Florenze Caffè"
                width={140}
                height={47}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label={u.closeMenu}
                className="p-2 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={hrefFor(l)}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl"
                  >
                    {t[l.key]}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={site.phoneHref}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 border border-goldlight/70 px-6 py-3 text-[0.75rem] uppercase tracking-[0.25em] text-goldlight"
              >
                {site.phone}
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58 }}
              >
                <LanguageSwitch locale={locale} dark={false} size="lg" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
