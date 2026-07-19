"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";

const links = [
  { label: "Our Story", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Visit Us", href: "/#visit" },
];

export default function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-cream/90 backdrop-blur-md border-b border-sand/60 shadow-[0_1px_20px_rgba(46,33,26,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="shrink-0" aria-label="Florenze Caffè — home">
          <Image
            src={dark ? "/images/logo.png" : "/images/logo-light.png"}
            alt="Florenze Caffè"
            width={140}
            height={47}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                dark ? "text-cocoa hover:text-gold" : "text-cream/90 hover:text-goldlight"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className={`border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
              dark
                ? "border-gold/60 text-gold hover:bg-gold hover:text-cream"
                : "border-cream/50 text-cream hover:bg-cream hover:text-espresso"
            }`}
          >
            {site.phone}
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span
            className={`block h-px w-6 ${dark ? "bg-espresso" : "bg-cream"}`}
          />
          <span
            className={`mt-2 block h-px w-6 ${dark ? "bg-espresso" : "bg-cream"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-espresso text-cream md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-3">
              <Image
                src="/images/logo-light.png"
                alt="Florenze Caffè"
                width={140}
                height={47}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={site.phoneHref}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 border border-goldlight/70 px-6 py-3 text-[0.75rem] uppercase tracking-[0.25em] text-goldlight"
              >
                {site.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
