import Reveal from "./Reveal";

export default function SectionHeading({
  overline,
  title,
  light = false,
}: {
  overline: string;
  title: string;
  light?: boolean;
}) {
  return (
    <Reveal className="text-center">
      <p
        className={`text-[0.7rem] tracking-[0.35em] uppercase font-medium ${
          light ? "text-goldlight" : "text-gold"
        }`}
      >
        {overline}
      </p>
      <h2
        className={`font-display text-4xl sm:text-5xl mt-3 ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3">
        <span className={`h-px w-14 ${light ? "bg-goldlight/60" : "bg-gold/60"}`} />
        <span
          className={`inline-block size-1.5 rotate-45 ${
            light ? "bg-goldlight" : "bg-gold"
          }`}
        />
        <span className={`h-px w-14 ${light ? "bg-goldlight/60" : "bg-gold/60"}`} />
      </div>
    </Reveal>
  );
}
