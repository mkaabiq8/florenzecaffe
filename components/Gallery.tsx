"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const tiles = [
  {
    src: "/images/winter-garden.webp",
    alt: "The indoor winter garden at Florenze Caffè",
    caption: "The winter garden",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/library.webp",
    alt: "The library corner with floor-to-ceiling bookshelves",
    caption: "The library",
    span: "sm:row-span-2",
  },
  {
    src: "/images/counter.webp",
    alt: "The counter with fresh pastries and ice cream",
    caption: "The counter",
    span: "",
  },
  {
    src: "/images/long-table.webp",
    alt: "The long communal table with fresh flowers",
    caption: "The long table",
    span: "sm:col-span-2",
  },
  {
    src: "/images/mezzanine.webp",
    alt: "Evening view over the lounge from the mezzanine",
    caption: "From the mezzanine",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/piano-room.webp",
    alt: "The piano room with exposed brick and fireplace",
    caption: "The piano room",
    span: "",
  },
  {
    src: "/images/lounge-shelves.webp",
    alt: "Chandeliers and curio shelves in the lounge",
    caption: "The lounge",
    span: "",
  },
  {
    src: "/images/reading-room.webp",
    alt: "The reading room with armchairs and lamplight",
    caption: "The reading room",
    span: "sm:col-span-2",
  },
  {
    src: "/images/quiet-corner.webp",
    alt: "A tufted sofa beside the brick wall and greenery",
    caption: "A quiet corner",
    span: "",
  },
  {
    src: "/images/golden-hour.webp",
    alt: "Afternoon light across the herringbone floor",
    caption: "Golden hour",
    span: "sm:col-span-2",
  },
  {
    src: "/images/deli-counter.webp",
    alt: "Fresh pastries, quiches and cold drinks on the deli counter",
    caption: "Fresh daily",
    span: "",
  },
  {
    src: "/images/sandwiches.webp",
    alt: "Fresh sandwiches and baguettes",
    caption: "Made every morning",
    span: "",
  },
  {
    src: "/images/icecream-display.webp",
    alt: "Papafilipou all-natural ice cream",
    caption: "All-natural ice cream",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading overline="A Look Inside" title="The Space" />

      <div className="mt-14 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-flow-dense sm:grid-cols-3">
        {tiles.map((t, i) => (
          <motion.figure
            key={t.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden ${t.span}`}
          >
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-roast/80 to-transparent px-4 pb-3 pt-10 font-display text-lg italic text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {t.caption}
            </figcaption>
          </motion.figure>
        ))}

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="group relative overflow-hidden"
        >
          <video
            src="/video/cafe-tour.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-roast/80 to-transparent px-4 pb-3 pt-10 font-display text-lg italic text-cream">
            Step inside
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
