import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-roast text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/logo-light.png"
            alt="Florenze Caffè"
            width={200}
            height={67}
            className="h-14 w-auto opacity-90"
          />
          <p className="font-display text-lg italic text-cream/70">
            {site.tagline}
          </p>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-cream/70">
            <Link href="/#about" className="transition-colors hover:text-goldlight">
              Our Story
            </Link>
            <Link href="/menu" className="transition-colors hover:text-goldlight">
              Menu
            </Link>
            <Link href="/#gallery" className="transition-colors hover:text-goldlight">
              Gallery
            </Link>
            <Link href="/#visit" className="transition-colors hover:text-goldlight">
              Visit Us
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-goldlight"
            >
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-goldlight"
            >
              Facebook
            </a>
          </nav>

          <p className="text-xs font-light text-cream/50">
            {site.address} ·{" "}
            <a href={site.phoneHref} className="hover:text-goldlight">
              {site.phone}
            </a>
          </p>

          <div className="mt-2 h-px w-24 bg-gold/40" />
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-cream/40">
            © {new Date().getFullYear()} Florenze Caffè · Nicosia, Cyprus
          </p>
        </div>
      </div>
    </footer>
  );
}
