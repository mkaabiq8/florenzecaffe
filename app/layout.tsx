import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://florenzecaffe.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Florenze Caffè — Specialty Coffee in Nicosia, Cyprus",
    template: "%s · Florenze Caffè",
  },
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
  openGraph: {
    type: "website",
    title: "Florenze Caffè — Finding peace, one cup at a time",
    description:
      "Specialty coffee, fresh pastries and all-natural ice cream in Strovolos, Nicosia. Open daily 7:00–22:00.",
    url: siteUrl,
    images: ["/images/interior.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Florenze Caffè",
  image: `${siteUrl}/images/interior.webp`,
  url: siteUrl,
  telephone: "+35722282000",
  priceRange: "€",
  servesCuisine: ["Coffee", "Pastries", "Ice cream", "Sandwiches"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andrea Avraamidi 47",
    addressLocality: "Strovolos, Nicosia",
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
  sameAs: [
    "https://www.instagram.com/florenze_caffe/",
    "https://www.facebook.com/p/Florenze-Caffe-61580957969235/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full`}>
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
