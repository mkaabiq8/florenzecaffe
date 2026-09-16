import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../globals.css";
import { defaultLocale, isLocale, locales, localeHref, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Set to the real domain once it is connected on Hostinger.
const siteUrl = site.url;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy: Record<
  Locale,
  {
    title: string;
    template: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  }
> = {
  en: {
    title: "Florenze Caffè — Specialty Coffee in Nicosia, Cyprus",
    template: "%s · Florenze Caffè",
    description:
      "Florenze Caffè, Strovolos, Nicosia. Specialty coffee, fresh pastries, all-natural ice cream and a calm, five-star-lobby atmosphere. Open daily 7:00–22:00.",
    keywords: [
      "Florenze Caffe",
      "cafe Nicosia",
      "coffee Strovolos",
      "specialty coffee Cyprus",
      "freddo espresso",
      "brunch Nicosia",
    ],
    ogTitle: "Florenze Caffè — Finding peace, one cup at a time",
    ogDescription:
      "Specialty coffee, fresh pastries and all-natural ice cream in Strovolos, Nicosia. Open daily 7:00–22:00.",
  },
  el: {
    title: "Florenze Caffè — Specialty Καφές στη Λευκωσία, Κύπρος",
    template: "%s · Florenze Caffè",
    description:
      "Florenze Caffè, Στρόβολος, Λευκωσία. Specialty καφές, φρέσκα γλυκά, 100% φυσικό παγωτό και μια ήρεμη ατμόσφαιρα five-star lobby. Ανοιχτά καθημερινά 7:00–22:00.",
    keywords: [
      "Florenze Caffe",
      "καφέ Λευκωσία",
      "καφές Στρόβολος",
      "specialty καφές Κύπρος",
      "φρέντο εσπρέσο",
      "brunch Λευκωσία",
    ],
    ogTitle: "Florenze Caffè — Βρίσκοντας γαλήνη, ένα φλιτζάνι τη φορά",
    ogDescription:
      "Specialty καφές, φρέσκα γλυκά και 100% φυσικό παγωτό στον Στρόβολο, Λευκωσία. Ανοιχτά καθημερινά 7:00–22:00.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const c = copy[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: { default: c.title, template: c.template },
    description: c.description,
    keywords: c.keywords,
    alternates: {
      canonical: localeHref(locale, "/"),
      languages: {
        en: "/",
        el: "/el",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      title: c.ogTitle,
      description: c.ogDescription,
      url: localeHref(locale, "/"),
      images: ["/images/interior.webp"],
      locale: locale === "el" ? "el_CY" : "en_US",
    },
  };
}

function jsonLdFor(locale: Locale) {
  const isEl = locale === "el";
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Florenze Caffè",
    image: `${siteUrl}/images/interior.webp`,
    url: `${siteUrl}${localeHref(locale, "/")}`,
    telephone: "+35722282000",
    priceRange: "€",
    inLanguage: locale,
    servesCuisine: isEl
      ? ["Καφές", "Γλυκά", "Παγωτό", "Σάντουιτς"]
      : ["Coffee", "Pastries", "Ice cream", "Sandwiches"],
    address: {
      "@type": "PostalAddress",
      streetAddress: isEl ? "Ανδρέα Αβρααμίδη 47" : "Andrea Avraamidi 47",
      addressLocality: isEl ? "Στρόβολος, Λευκωσία" : "Strovolos, Nicosia",
      postalCode: "2024",
      addressCountry: "CY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.1391576,
      longitude: 33.3651433,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
    },
    hasMenu: `${siteUrl}${localeHref(locale, "/menu")}`,
    sameAs: [site.instagram, site.facebook],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const jsonLd = jsonLdFor(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="grain min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
