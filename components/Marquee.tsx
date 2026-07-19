const words = [
  "Freddo Espresso",
  "Spanish Latte",
  "Matcha",
  "Cyprus Coffee",
  "Fresh Pastries",
  "Papafilipou Ice Cream",
  "Homemade Lemonade",
  "Cinnamon Buns",
  "Specialty Tea",
];

function Row() {
  return (
    <>
      {words.map((w) => (
        <span key={w} className="mx-6 inline-flex items-center gap-6">
          <span className="font-display text-lg italic tracking-wide">{w}</span>
          <span className="inline-block size-1 rotate-45 bg-goldlight/70" />
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-espresso py-3.5 text-goldlight">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <div className="flex items-center">
          <Row />
        </div>
        <div className="flex items-center" aria-hidden>
          <Row />
        </div>
      </div>
    </div>
  );
}
