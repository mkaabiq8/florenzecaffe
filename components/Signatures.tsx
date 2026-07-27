import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { localeHref, ui, type Locale } from "@/lib/i18n";

const copy: Record<
  Locale,
  {
    overline: string;
    title: string;
    picks: { name: string; price: string }[];
    footnote: string;
    viewMenu: string;
  }
> = {
  en: {
    overline: "From the Counter",
    title: "House Favourites",
    picks: [
      { name: "Freddo Cappuccino", price: "3.90" },
      { name: "Spanish Latte", price: "4.20" },
      { name: "Cyprus Coffee", price: "2.80" },
      { name: "Matcha (hot / iced)", price: "4.90" },
      { name: "Pistachio Croissant", price: "3.50" },
      { name: "Cinnamon Bun", price: "4.50" },
      { name: "Lotus Cheesecake", price: "4.50" },
      { name: "Fresh Orange Juice", price: "3.20" },
    ],
    footnote:
      "All coffees are available decaffeinated · oat, almond & coconut milk +€0.40",
    viewMenu: "View Full Menu",
  },
  el: {
    overline: "Από τον Πάγκο",
    title: "Αγαπημένα του Μαγαζιού",
    picks: [
      { name: "Φρέντο Καπουτσίνο", price: "3.90" },
      { name: "Ισπανικό Λάτε", price: "4.20" },
      { name: "Κυπριακός Καφές", price: "2.80" },
      { name: "Matcha (ζεστό / κρύο)", price: "4.90" },
      { name: "Κρουασάν Φιστίκι", price: "3.50" },
      { name: "Ρολό Κανέλας", price: "4.50" },
      { name: "Cheesecake Lotus", price: "4.50" },
      { name: "Φρέσκος Χυμός Πορτοκάλι", price: "3.20" },
    ],
    footnote:
      "Όλοι οι καφέδες διατίθενται αποκαφεϊνωμένοι · γάλα βρώμης, αμυγδάλου ή καρύδας +€0,40",
    viewMenu: "Δείτε Όλο το Μενού",
  },
};

export default function Signatures({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className="bg-parchment/70 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading overline={c.overline} title={c.title} />

        <Reveal delay={0.15}>
          <div className="menu-frame mx-auto mt-14 max-w-3xl bg-cream px-6 py-10 sm:px-12">
            <div className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
              {c.picks.map((p) => (
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
              {c.footnote}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={localeHref(locale, "/menu")}
                className="bg-espresso px-8 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-cream transition-colors hover:bg-cocoa"
              >
                {c.viewMenu}
              </Link>
              <a
                href="/florenze-menu.pdf"
                target="_blank"
                rel="noopener"
                className="border border-espresso/40 px-8 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-espresso transition-colors hover:border-gold hover:text-gold"
              >
                {ui[locale].downloadPdf}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
