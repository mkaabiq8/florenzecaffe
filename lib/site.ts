import type { LocalizedText } from "./i18n";

export const site = {
  name: "Florenze Caffè",
  phone: "+357 22 282000",
  phoneHref: "tel:+35722282000",
  rating: "4.3",
  reviewCount: 124,
  instagram: "https://www.instagram.com/florenze_caffe/",
  facebook: "https://www.facebook.com/p/Florenze-Caffe-61580957969235/",
  directions: "https://maps.app.goo.gl/UxM1mawcfvs95vby5",
  mapEmbed:
    "https://www.google.com/maps?q=Florenze%20Caffe%2C%20Andrea%20Avraamidi%2047%2C%20Strovolos&z=16&output=embed",
  tagline: {
    en: "Finding peace, one cup at a time.",
    el: "Βρίσκοντας γαλήνη, ένα φλιτζάνι τη φορά.",
  } satisfies LocalizedText,
  address: {
    en: "Andrea Avraamidi 47, Strovolos, Nicosia 2024, Cyprus",
    el: "Ανδρέα Αβρααμίδη 47, Στρόβολος, Λευκωσία 2024, Κύπρος",
  } satisfies LocalizedText,
  hours: {
    en: "Open daily · 7:00 — 22:00",
    el: "Ανοιχτά καθημερινά · 7:00 — 22:00",
  } satisfies LocalizedText,
};
