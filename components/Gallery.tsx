"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const tiles = [
  {
    src: "/images/interior.webp",
    alt: "The lounge at Florenze Caffè",
    caption: "The lounge",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/sandwiches.webp",
    alt: "Fresh sandwiches and baguettes",
    caption: "Made fresh daily",
    span: "",
  },
  {
    src: "/images/icecream-display.webp",
    alt: "Papafilipou all-natural ice cream",
    caption: "All-natural ice cream",
    span: "",
  },
  {
    src: "/images/icecream-fridge.webp",
    alt: "Ice cream cones and cups",
    caption: "Cones & cups",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading overline="A Look Inside" title="The Space" />

      <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-3">
        {tiles.map((t, i) => (
          <motion.figure
            key={t.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
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
          transition={{ duration: 0.6, delay: 0.32 }}
          className="group relative overflow-hidden sm:col-span-1"
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
