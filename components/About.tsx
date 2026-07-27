import Reveal from "./Reveal";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const copy: Record<
  Locale,
  {
    overline: string;
    heading: React.ReactNode;
    paragraph: string;
    features: { title: string; text: string }[];
  }
> = {
  en: {
    overline: "Our Story",
    heading: (
      <>
        A quiet corner of
        <br />
        <em className="text-cocoa">Nicosia</em>, poured slowly.
      </>
    ),
    paragraph:
      "Florenze Caffè is a stylish, cosy space in Strovolos — warm wood, soft light and the scent of fresh espresso. A place to begin the morning, to meet, to work, or simply to sit still for a while.",
    features: [
      {
        title: "Specialty Coffee",
        text: "From single-origin espresso to silky freddo cappuccino — every cup, hot or iced, made with care.",
      },
      {
        title: "Fresh Every Morning",
        text: "Croissants, pies, cinnamon buns and savoury twists arrive fresh daily from the oven.",
      },
      {
        title: "All-Natural Ice Cream",
        text: "A full Papafilipou cabinet — from Madagascar vanilla to sugar-free strawberry.",
      },
      {
        title: "A Calm Space",
        text: "Guests say it feels like the lounge of a five-star hotel. Come for coffee, stay for the quiet.",
      },
    ],
  },
  el: {
    overline: "Η Ιστορία μας",
    heading: (
      <>
        Μια ήσυχη γωνιά της
        <br />
        <em className="text-cocoa">Λευκωσίας</em>, χυμένη αργά.
      </>
    ),
    paragraph:
      "Το Florenze Caffè είναι ένας κομψός, φιλόξενος χώρος στον Στρόβολο — ζεστό ξύλο, απαλό φως και το άρωμα φρέσκου εσπρέσο. Ένα μέρος για να ξεκινήσετε το πρωί, να συναντηθείτε, να δουλέψετε, ή απλώς να καθίσετε ήσυχα για λίγο.",
    features: [
      {
        title: "Specialty Καφές",
        text: "Από espresso μονής προέλευσης έως βελούδινο freddo cappuccino — κάθε φλιτζάνι, ζεστό ή κρύο, φτιαγμένο με φροντίδα.",
      },
      {
        title: "Φρέσκο Κάθε Πρωί",
        text: "Croissants, πίτες, ρολά κανέλας και αλμυρά twists φτάνουν φρέσκα καθημερινά από τον φούρνο.",
      },
      {
        title: "100% Φυσικό Παγωτό",
        text: "Πλήρης βιτρίνα Papafilipou — από βανίλια Μαδαγασκάρης έως φράουλα χωρίς ζάχαρη.",
      },
      {
        title: "Ένας Ήρεμος Χώρος",
        text: "Οι επισκέπτες λένε πως θυμίζει το lounge ενός πολυτελούς ξενοδοχείου 5 αστέρων. Ελάτε για καφέ, μείνετε για την ηρεμία.",
      },
    ],
  },
};

export default function About({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
              {c.overline}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
              {c.heading}
            </h2>
            <p className="mt-6 max-w-lg font-light leading-relaxed text-cocoa">
              {c.paragraph}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {c.features.map((f, i) => (
              <Reveal key={f.title} delay={0.1 + i * 0.08}>
                <div className="border-l border-gold/50 pl-4">
                  <h3 className="font-display text-xl text-espresso">{f.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-mocha">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-t-[12rem] border border-gold/40" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-lg">
            <video
              src="/video/koi.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="aspect-[9/14] w-full object-cover"
            />
          </div>
          <p className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.3em] text-mocha">
            {site.hours[locale]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
