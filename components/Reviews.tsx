import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Polyvios A.",
    text: "A café that feels like the lobby of a five-star hotel. Calm, warm atmosphere, wonderful coffee and fresh pastries. This is my new favourite spot.",
  },
  {
    name: "Simos S.",
    text: "A great experience — a warm, cosy vibe that makes it ideal for coffee, breakfast or even a casual meeting. The snacks and desserts were fresh and delicious.",
  },
  {
    name: "Panagiotis T.",
    text: "A wonderful café in Nicosia. The stunning décor throughout reminds you of a luxury hotel — clearly a lot of care has gone into this place.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-goldlight" aria-label="5 star review">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-espresso py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading light overline="Kind Words" title="What Guests Say" />

        <Reveal delay={0.1} className="mt-6 text-center">
          <p className="text-[0.72rem] uppercase tracking-[0.25em] text-cream/60">
            <span className="text-goldlight">★ {site.rating}</span> ·{" "}
            {site.reviewCount} reviews on Google
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.15 + i * 0.1}>
              <figure className="flex h-full flex-col border border-cream/15 bg-roast/60 p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-cream/90">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-[0.7rem] uppercase tracking-[0.25em] text-cream/60">
                  {r.name} · Google review
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
