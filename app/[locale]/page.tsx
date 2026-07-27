import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Signatures from "@/components/Signatures";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <main>
      <Nav locale={locale} />
      <Hero locale={locale} />
      <Marquee locale={locale} />
      <About locale={locale} />
      <Signatures locale={locale} />
      <Gallery locale={locale} />
      <Reviews locale={locale} />
      <Visit locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
