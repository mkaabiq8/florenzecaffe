import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const copy: Record<
  Locale,
  {
    overline: string;
    title: string;
    address: string;
    directions: string;
    openingHours: string;
    rows: [string, string][];
    contact: string;
    mapTitle: string;
  }
> = {
  en: {
    overline: "Come By",
    title: "Visit Us",
    address: "Address",
    directions: "Get Directions →",
    openingHours: "Opening Hours",
    rows: [
      ["Monday — Friday", "7:00 — 22:00"],
      ["Saturday", "7:00 — 22:00"],
      ["Sunday", "7:00 — 22:00"],
    ],
    contact: "Contact",
    mapTitle: "Map — Florenze Caffè, Strovolos, Nicosia",
  },
  el: {
    overline: "Περάστε",
    title: "Επισκεφθείτε μας",
    address: "Διεύθυνση",
    directions: "Λάβετε Οδηγίες →",
    openingHours: "Ώρες Λειτουργίας",
    rows: [
      ["Δευτέρα — Παρασκευή", "7:00 — 22:00"],
      ["Σάββατο", "7:00 — 22:00"],
      ["Κυριακή", "7:00 — 22:00"],
    ],
    contact: "Επικοινωνία",
    mapTitle: "Χάρτης — Florenze Caffè, Στρόβολος, Λευκωσία",
  },
};

export default function Visit({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section id="visit" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading overline={c.overline} title={c.title} />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-10 border border-sand bg-parchment/60 p-8 sm:p-10">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                {c.address}
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-espresso">
                {site.address[locale]}
              </p>
              <a
                href={site.directions}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block border-b border-gold pb-0.5 text-[0.72rem] font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:text-espresso hover:border-espresso"
              >
                {c.directions}
              </a>
            </div>

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                {c.openingHours}
              </p>
              <dl className="mt-3 max-w-sm">
                {c.rows.map(([d, h]) => (
                  <div
                    key={d}
                    className="flex items-baseline justify-between border-b border-sand/70 py-2.5 text-sm"
                  >
                    <dt className="font-light text-cocoa">{d}</dt>
                    <dd className="font-medium tracking-wide text-espresso">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                {c.contact}
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 block font-display text-2xl text-espresso transition-colors hover:text-gold"
              >
                {site.phone}
              </a>
              <div className="mt-4 flex gap-6 text-[0.72rem] font-medium uppercase tracking-[0.25em]">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener"
                  className="text-cocoa transition-colors hover:text-gold"
                >
                  Instagram
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener"
                  className="text-cocoa transition-colors hover:text-gold"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="h-full min-h-[420px] overflow-hidden border border-sand">
            <iframe
              src={site.mapEmbed}
              title={c.mapTitle}
              className="h-full w-full"
              style={{ filter: "sepia(0.25) saturate(0.85)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
