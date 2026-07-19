import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { menu, type MenuItem, type MenuSection } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Florenze Caffè menu — specialty coffee, teas, fresh pastries, sandwiches, sweets and all-natural ice cream. Strovolos, Nicosia.",
};

function Price({ item, legend }: { item: MenuItem; legend?: MenuSection["legend"] }) {
  if (legend === "hot-ice" && (item.hot || item.ice)) {
    return (
      <span className="shrink-0 text-sm font-medium tracking-wide text-gold">
        {item.hot && <span>€{item.hot}</span>}
        {item.hot && item.ice && <span className="mx-1.5 text-mocha/60">/</span>}
        {item.ice && (
          <span>
            <span className="mr-1 text-[0.6rem] uppercase tracking-widest text-mocha/70">
              iced
            </span>
            €{item.ice}
          </span>
        )}
      </span>
    );
  }
  if (legend === "small-large" && (item.small || item.large)) {
    return (
      <span className="shrink-0 text-sm font-medium tracking-wide text-gold">
        €{item.small}
        <span className="mx-1.5 text-mocha/60">/</span>€{item.large}
      </span>
    );
  }
  return item.price ? (
    <span className="shrink-0 text-sm font-medium tracking-wide text-gold">
      €{item.price}
    </span>
  ) : (
    <span className="shrink-0 text-xs italic text-mocha/70">ask in store</span>
  );
}

function Section({ section }: { section: MenuSection }) {
  return (
    <Reveal>
      <section id={section.id} className="scroll-mt-36">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl text-espresso sm:text-4xl">
            {section.title}
          </h2>
          {section.legend === "hot-ice" && (
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-mocha">
              hot / iced
            </span>
          )}
          {section.legend === "small-large" && (
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-mocha">
              small / large
            </span>
          )}
        </div>
        {section.tagline && (
          <p className="mt-1.5 font-display italic text-mocha">{section.tagline}</p>
        )}
        <div className="mt-3 h-px bg-gold/40" />

        <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <li key={item.name}>
              <div className="flex items-baseline">
                <span className="font-display text-lg leading-snug text-espresso">
                  {item.name}
                </span>
                <span className="leader" />
                <Price item={item} legend={section.legend} />
              </div>
              {item.note && (
                <p className="mt-0.5 pr-10 text-xs font-light italic leading-relaxed text-mocha">
                  {item.note}
                </p>
              )}
            </li>
          ))}
        </ul>

        {section.footnote && (
          <p className="mt-6 text-xs font-light italic text-mocha">
            * {section.footnote}
          </p>
        )}
      </section>
    </Reveal>
  );
}

export default function MenuPage() {
  return (
    <main className="bg-cream">
      <Nav solid />

      <header className="mx-auto max-w-4xl px-5 pt-32 pb-10 text-center sm:pt-40">
        <Reveal>
          <Image
            src="/images/coffee-cup.png"
            alt=""
            width={140}
            height={140}
            className="mx-auto h-24 w-auto"
          />
          <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-gold">
            Florenze Caffè · Nicosia
          </p>
          <h1 className="mt-3 font-display text-5xl text-espresso sm:text-6xl">
            The Menu
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gold/60" />
            <span className="inline-block size-1.5 rotate-45 bg-gold" />
            <span className="h-px w-14 bg-gold/60" />
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-cocoa">
            All coffees are available decaffeinated. If you have a food allergy,
            please inform a member of our staff.
          </p>
          <a
            href="/florenze-menu.pdf"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-block border border-espresso/40 px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:border-gold hover:text-gold"
          >
            Download PDF
          </a>
        </Reveal>
      </header>

      <nav className="sticky top-[60px] z-40 border-y border-sand/70 bg-cream/95 backdrop-blur-md sm:top-[64px]">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3">
          {menu.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 whitespace-nowrap border border-transparent px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-colors hover:border-gold/50 hover:text-gold"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-4xl space-y-20 px-5 py-16 sm:py-20">
        {menu.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
