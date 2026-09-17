"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { defaultLocale, isLocale, localeHref, type Locale } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const copy: Record<
  Locale,
  { eyebrow: string; heading: string; body: string; home: string; menu: string }
> = {
  en: {
    eyebrow: "404",
    heading: "This page has wandered off",
    body: "The page you're looking for doesn't exist, or may have moved. Let's get you back to something delicious.",
    home: "Back to Home",
    menu: "View the Menu",
  },
  el: {
    eyebrow: "404",
    heading: "Αυτή η σελίδα χάθηκε",
    body: "Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί. Ας σας πάμε πίσω σε κάτι νόστιμο.",
    home: "Επιστροφή στην Αρχική",
    menu: "Δείτε το Μενού",
  },
};

function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1] ?? "";
  return isLocale(first) ? first : defaultLocale;
}

export default function GlobalNotFound() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = copy[locale];

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="grain min-h-full flex flex-col">
        <Nav locale={locale} />
        <main className="flex min-h-[70vh] flex-1 flex-col items-center justify-center px-5 py-32 text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-gold">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl italic text-espresso sm:text-5xl">
            {t.heading}
          </h1>
          <p className="mt-5 max-w-md text-sm text-espresso/70">{t.body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href={localeHref(locale, "/")}
              className="border border-espresso/40 px-8 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-espresso transition-colors hover:border-gold hover:text-gold"
            >
              {t.home}
            </Link>
            <Link
              href={localeHref(locale, "/menu")}
              className="inline-block border-b border-gold pb-0.5 text-[0.72rem] font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:border-espresso hover:text-espresso"
            >
              {t.menu}
            </Link>
          </div>
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
