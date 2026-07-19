import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

const rows = [
  ["Monday — Friday", "7:00 — 22:00"],
  ["Saturday", "7:00 — 22:00"],
  ["Sunday", "7:00 — 22:00"],
];

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading overline="Come By" title="Visit Us" />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-10 border border-sand bg-parchment/60 p-8 sm:p-10">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                Address
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-espresso">
                {site.address}
              </p>
              <a
                href={site.directions}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block border-b border-gold pb-0.5 text-[0.72rem] font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:text-espresso hover:border-espresso"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                Opening Hours
              </p>
              <dl className="mt-3 max-w-sm">
                {rows.map(([d, h]) => (
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
                Contact
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
              title="Map — Florenze Caffè, Strovolos, Nicosia"
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
