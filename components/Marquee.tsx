import type { Locale } from "@/lib/i18n";

const words: Record<Locale, string[]> = {
  en: [
    "Freddo Espresso",
    "Spanish Latte",
    "Matcha",
    "Cyprus Coffee",
    "Fresh Pastries",
    "Papafilipou Ice Cream",
    "Homemade Lemonade",
    "Cinnamon Buns",
    "Specialty Tea",
  ],
  el: [
    "Φρέντο Εσπρέσο",
    "Ισπανικό Λάτε",
    "Matcha",
    "Κυπριακός Καφές",
    "Φρέσκα Γλυκά",
    "Παγωτό Papafilipou",
    "Σπιτική Λεμονάδα",
    "Ρολά Κανέλας",
    "Specialty Τσάι",
  ],
};

function Row({ locale }: { locale: Locale }) {
  return (
    <>
      {words[locale].map((w) => (
        <span key={w} className="mx-6 inline-flex items-center gap-6">
          <span className="font-display text-lg italic tracking-wide">{w}</span>
          <span className="inline-block size-1 rotate-45 bg-goldlight/70" />
        </span>
      ))}
    </>
  );
}

export default function Marquee({ locale }: { locale: Locale }) {
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-espresso py-3.5 text-goldlight">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <div className="flex items-center">
          <Row locale={locale} />
        </div>
        <div className="flex items-center" aria-hidden>
          <Row locale={locale} />
        </div>
      </div>
    </div>
  );
}
