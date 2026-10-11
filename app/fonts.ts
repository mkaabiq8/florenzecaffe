import localFont from "next/font/local";

// Self-hosted (latin subset of the Google variable fonts) so builds never
// need to reach fonts.googleapis.com — the Hostinger build host can't load
// Next's Google font loader reliably.
export const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    {
      path: "./fonts/CormorantGaramond-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-Italic-latin.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
});

export const jost = localFont({
  variable: "--font-jost",
  display: "swap",
  src: [
    {
      path: "./fonts/Jost-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
});
