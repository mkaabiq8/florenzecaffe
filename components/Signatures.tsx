import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const picks = [
  { name: "Freddo Cappuccino", price: "3.90" },
  { name: "Spanish Latte", price: "4.20" },
  { name: "Cyprus Coffee", price: "2.80" },
  { name: "Matcha (hot / iced)", price: "4.90" },
  { name: "Pistachio Croissant", price: "3.50" },
  { name: "Cinnamon Bun", price: "4.50" },
  { name: "Lotus Cheesecake", price: "4.50" },
  { name: "Fresh Orange Juice", price: "3.20" },
];

export default function Signatures() {
  return (
    <section className="bg-parchment/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading overline="From the Counter" title="House Favourites" />

        <Reveal delay={0.15}>
          <div className="menu-frame mx-auto mt-14 max-w-3xl bg-cream px-6 py-10 sm:px-12">
            <div className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
              {picks.map((p) => (
                <div key={p.name} className="flex items-baseline">
                  <span className="font-display text-lg text-espresso">
                    {p.name}
                  </span>
                  <span className="leader" />
                  <span className="text-sm font-medium tracking-wide text-gold">
                    €{p.price}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs font-light italic text-mocha">
              All coffees are available decaffeinated · oat, almond &amp; coconut
              milk +€0.40
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="bg-espresso px-8 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-cream transition-colors hover:bg-cocoa"
              >
                View Full Menu
              </Link>
              <a
                href="/florenze-menu.pdf"
                target="_blank"
                rel="noopener"
                className="border border-espresso/40 px-8 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-espresso transition-colors hover:border-gold hover:text-gold"
              >
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
