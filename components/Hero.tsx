"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { localeHref, type Locale } from "@/lib/i18n";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const copy: Record<
  Locale,
  { location: string; exploreMenu: string; findUs: string; reviews: string; dineTakeaway: string }
> = {
  en: {
    location: "Strovolos · Nicosia · Cyprus",
    exploreMenu: "Explore the Menu",
    findUs: "Find Us",
    reviews: "Google reviews",
    dineTakeaway: "Dine-in · Takeaway",
  },
  el: {
    location: "Στροβόλος · Λευκωσία · Κύπρος",
    exploreMenu: "Δείτε το Μενού",
    findUs: "Βρείτε μας",
    reviews: "αξιολογήσεις Google",
    dineTakeaway: "Για εδώ · Για πακέτο",
  },
};

export default function Hero({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/interior.webp"
          alt="Inside Florenze Caffè"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-roast/80 via-roast/55 to-roast/85" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <motion.p
          {...fade(0.1)}
          className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-goldlight"
        >
          {c.location}
        </motion.p>

        <motion.div {...fade(0.25)} className="mt-8">
          <Image
            src="/images/logo-light.png"
            alt="Florenze Caffè"
            width={709}
            height={237}
            priority
            className="h-auto w-72 sm:w-96"
          />
        </motion.div>

        <motion.p
          {...fade(0.45)}
          className="mt-8 max-w-xl font-display text-2xl italic text-cream/90 sm:text-3xl"
        >
          “{site.tagline[locale]}”
        </motion.p>

        <motion.div
          {...fade(0.65)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href={localeHref(locale, "/menu")}
            className="bg-gold px-8 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.28em] text-cream transition-colors hover:bg-goldlight hover:text-espresso"
          >
            {c.exploreMenu}
          </Link>
          <Link
            href={`${localeHref(locale, "/")}#visit`}
            className="border border-cream/50 px-8 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.28em] text-cream transition-colors hover:bg-cream hover:text-espresso"
          >
            {c.findUs}
          </Link>
        </motion.div>
      </div>

      <motion.div
        {...fade(0.9)}
        className="relative z-10 border-t border-cream/15"
      >
        <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-cream/15 text-center text-cream/85 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-4 py-4 text-[0.72rem] uppercase tracking-[0.2em]">
            {site.hours[locale]}
          </div>
          <div className="px-4 py-4 text-[0.72rem] uppercase tracking-[0.2em]">
            <span className="text-goldlight">★</span> {site.rating} · {site.reviewCount}{" "}
            {c.reviews}
          </div>
          <div className="px-4 py-4 text-[0.72rem] uppercase tracking-[0.2em]">
            {c.dineTakeaway}
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <span className="animate-cue block h-12 w-px bg-goldlight/80" />
      </div>
    </section>
  );
}
