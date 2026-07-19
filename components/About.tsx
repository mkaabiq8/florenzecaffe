import Reveal from "./Reveal";
import { site } from "@/lib/site";

const features = [
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
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
              A quiet corner of
              <br />
              <em className="text-cocoa">Nicosia</em>, poured slowly.
            </h2>
            <p className="mt-6 max-w-lg font-light leading-relaxed text-cocoa">
              Florenze Caffè is a stylish, cosy space in Strovolos — warm wood,
              soft light and the scent of fresh espresso. A place to begin the
              morning, to meet, to work, or simply to sit still for a while.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
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
              src="/video/cafe-short.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="aspect-[9/14] w-full object-cover"
            />
          </div>
          <p className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.3em] text-mocha">
            {site.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
