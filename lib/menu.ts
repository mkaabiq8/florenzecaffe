import type { LocalizedText } from "./i18n";

export type MenuItem = {
  name: LocalizedText;
  note?: LocalizedText;
  price?: string;
  hot?: string;
  ice?: string;
  small?: string;
  large?: string;
};

export type MenuSection = {
  id: string;
  title: LocalizedText;
  tagline?: LocalizedText;
  legend?: "hot-ice" | "small-large";
  footnote?: LocalizedText;
  items: MenuItem[];
};

const t = (en: string, el: string): LocalizedText => ({ en, el });

export const menu: MenuSection[] = [
  {
    id: "coffee",
    title: t("Coffee", "Καφές"),
    tagline: t("Finding peace, one cup at a time.", "Βρίσκοντας γαλήνη, ένα φλιτζάνι τη φορά."),
    legend: "hot-ice",
    footnote: t(
      "All coffees are available decaffeinated.",
      "Όλοι οι καφέδες διατίθενται και αποκαφεϊνωμένοι."
    ),
    items: [
      { name: t("Espresso (Single)", "Εσπρέσο (Μονός)"), hot: "2.50" },
      { name: t("Double Espresso", "Διπλός Εσπρέσο"), hot: "3.30" },
      { name: t("Freddo Espresso", "Φρέντο Εσπρέσο"), ice: "3.40" },
      { name: t("Freddo Cappuccino", "Φρέντο Καπουτσίνο"), ice: "3.90" },
      { name: t("Cappuccino", "Καπουτσίνο"), hot: "3.80" },
      { name: t("Americano", "Αμερικάνο"), hot: "3.40", ice: "3.40" },
      { name: t("Latte / Ice Latte", "Λάτε / Παγωμένο Λάτε"), hot: "3.80", ice: "3.80" },
      { name: t("Flat White", "Flat White"), hot: "3.80", ice: "4.20" },
      { name: t("Affogato", "Affogato"), ice: "4.00" },
      { name: t("Spanish Latte", "Ισπανικό Λάτε"), hot: "4.20", ice: "4.20" },
      {
        name: t("Filter Coffee", "Καφές Φίλτρου"),
        note: t("French press coffee", "Καφές γαλλικής πρέσας"),
        hot: "4.20",
      },
      { name: t("Mocha", "Μόκα"), hot: "3.95", ice: "3.95" },
      { name: t("Nescafé / Frappé", "Νεσκαφέ / Φραπέ"), hot: "3.40", ice: "3.40" },
      { name: t("Cyprus Coffee", "Κυπριακός Καφές"), hot: "2.80" },
      { name: t("Double Cyprus Coffee", "Διπλός Κυπριακός Καφές"), hot: "3.30" },
    ],
  },
  {
    id: "non-coffee",
    title: t("Non-Coffee", "Ροφήματα"),
    legend: "hot-ice",
    items: [
      { name: t("Chocolate", "Σοκολάτα"), hot: "4.00", ice: "4.00" },
      { name: t("White Chocolate", "Λευκή Σοκολάτα"), hot: "4.00", ice: "4.00" },
      { name: t("Matcha", "Matcha"), hot: "4.90", ice: "4.90" },
      {
        name: t("Milk Shake", "Μιλκσέικ"),
        note: t("Chocolate, Strawberry, Vanilla, Banana", "Σοκολάτα, Φράουλα, Βανίλια, Μπανάνα"),
        ice: "4.50",
      },
      {
        name: t("Smoothie", "Smoothie"),
        note: t("Strawberry, Mango, Banana", "Φράουλα, Μάνγκο, Μπανάνα"),
        ice: "4.50",
      },
    ],
  },
  {
    id: "tea",
    title: t("Tea", "Τσάι"),
    tagline: t(
      "Rooted in tradition. Crafted for the modern palate.",
      "Ριζωμένο στην παράδοση. Φτιαγμένο για τον σύγχρονο ουρανίσκο."
    ),
    legend: "hot-ice",
    items: [
      {
        name: t("Black Tea", "Μαύρο Τσάι"),
        note: t("English Breakfast, Earl Grey, India Chai", "English Breakfast, Earl Grey, Chai Ινδίας"),
        hot: "3.00",
        ice: "3.00",
      },
      {
        name: t("Green Tea", "Πράσινο Τσάι"),
        note: t("Sencha, Jasmine, Moroccan Mint, Citronella", "Sencha, Γιασεμί, Μαροκινή Μέντα, Λεμονόχορτο"),
        hot: "3.00",
        ice: "3.00",
      },
      {
        name: t("Herbal Tea", "Τσάι Βοτάνων"),
        note: t(
          "Chamomile, Peppermint, Wild Berry, Ginger Peach, Red Rooibos",
          "Χαμομήλι, Μέντα, Άγρια Μούρα, Τζίντζερ-Ροδάκινο, Κόκκινο Rooibos"
        ),
        hot: "3.00",
        ice: "3.00",
      },
    ],
  },
  {
    id: "snacks",
    title: t("Snacks", "Σνακ"),
    items: [
      { name: t("Cheese Pie", "Τυρόπιτα"), price: "3.90" },
      { name: t("Quiche", "Κις"), price: "4.50" },
      { name: t("Spinach & Cheese Pie", "Σπανακοτυρόπιτα"), price: "3.90" },
      { name: t("Fetopita", "Φετόπιτα"), price: "3.50" },
      { name: t("Croissant Plain", "Απλό Κρουασάν"), price: "2.80" },
      {
        name: t("Croissant", "Κρουασάν"),
        note: t("Pistachio, Cookies, Chocolate, Apricot Jam", "Φιστίκι, Cookies, Σοκολάτα, Μαρμελάδα Βερίκοκο"),
        price: "3.50",
      },
      { name: t("Halloumi Twist", "Στριφτό Χαλούμι"), price: "3.50" },
      { name: t("Olive, Spinach & Onion", "Ελιά, Σπανάκι & Κρεμμύδι"), price: "3.50" },
      { name: t("Olive Twist", "Στριφτό Ελιάς"), price: "3.50" },
      { name: t("Tachinopita", "Ταχινόπιτα"), price: "4.80" },
    ],
  },
  {
    id: "lunch",
    title: t("Light Fare / Lunch", "Ελαφρύ Γεύμα"),
    items: [
      {
        name: t("Salads", "Σαλάτες"),
        note: t("Caesar Salad, Tuna Salad", "Σαλάτα Caesar, Σαλάτα Τόνου"),
        price: "5.00",
      },
      {
        name: t("Sandwiches", "Σάντουιτς"),
        note: t(
          "Chicken Caesar, Chicken Parm, Chicken Pesto, Turkey Cheese, Turkey Cream Brown, Turkey Cream Fitness",
          "Κοτόπουλο Caesar, Κοτόπουλο Parmesan, Κοτόπουλο Pesto, Γαλοπούλα Τυρί, Γαλοπούλα Κρέμα Μαύρο Ψωμί, Γαλοπούλα Κρέμα Fitness"
        ),
        price: "4.50",
      },
      { name: t("Tuna Sandwich", "Σάντουιτς Τόνου"), price: "4.90" },
    ],
  },
  {
    id: "sweets",
    title: t("Sweets & Desserts", "Γλυκά & Επιδόρπια"),
    items: [
      { name: t("Apple Crumble Pie", "Πίτα Μήλου Crumble"), price: "4.00" },
      {
        name: t("Muffins", "Μάφιν"),
        note: t("Chocolate, Apple, Orange, Blueberry", "Σοκολάτα, Μήλο, Πορτοκάλι, Βατόμουρο"),
        price: "3.80",
      },
      { name: t("Cinnamon Bun", "Ρολό Κανέλας"), price: "4.50" },
      {
        name: t("Cheesecake", "Cheesecake"),
        note: t("Blackcurrant, Lemon, Lotus", "Μαύρο Φραγκοστάφυλο, Λεμόνι, Lotus"),
        price: "4.50",
      },
      {
        name: t("Yogurts", "Γιαούρτια"),
        note: t("Maple-Banana, Chia", "Σφένδαμος-Μπανάνα, Chia"),
        price: "4.50",
      },
      { name: t("Aubin Homemade Selection", "Aubin Σπιτική Επιλογή"), price: "4.50" },
      {
        name: t("Cookies", "Cookies"),
        note: t("Vanilla Chocolate Chip, Chocolate, Brookie", "Βανίλια Σοκολατάκια, Σοκολάτα, Brookie"),
        price: "3.00",
      },
      {
        name: t("Piece of Cake", "Κομμάτι Κέικ"),
        note: t("Carrot, Chocolate, Red Velvet", "Καρότο, Σοκολάτα, Red Velvet"),
        price: "4.80",
      },
    ],
  },
  {
    id: "sugar-free",
    title: t("Sugar-Free Sweets", "Γλυκά Χωρίς Ζάχαρη"),
    items: [
      { name: t("No Sugar Energy Balls", "Μπάλες Ενέργειας Χωρίς Ζάχαρη"), price: "2.20" },
      { name: t("No Sugar Peanut Bar", "Μπάρα Φιστικιού Χωρίς Ζάχαρη"), price: "3.00" },
      { name: t("No Sugar “Dukissa” Cake", "Κέικ «Dukissa» Χωρίς Ζάχαρη"), price: "3.00" },
    ],
  },
  {
    id: "ice-cream",
    title: t("Ice Creams", "Παγωτά"),
    tagline: t("Papafilipou — all-natural ice cream.", "Papafilipou — 100% φυσικό παγωτό."),
    items: [
      { name: t("Madagascar Vanilla Cup", "Κύπελλο Βανίλια Μαδαγασκάρης"), price: "2.00" },
      { name: t("Classic Chocolate Cup", "Κύπελλο Κλασική Σοκολάτα"), price: "2.00" },
      { name: t("Fat-Free Vanilla Cup", "Κύπελλο Βανίλια Χωρίς Λιπαρά"), price: "2.90" },
      { name: t("Ice Cream Sandwich", "Sandwich Παγωτού"), price: "2.90" },
      { name: t("Rocket Cone Vanilla", "Χωνάκι Rocket Βανίλια"), price: "3.00" },
      { name: t("Rocket Cone Chocolate", "Χωνάκι Rocket Σοκολάτα"), price: "3.00" },
      { name: t("Vanilla-Chocolate Cup", "Κύπελλο Βανίλια-Σοκολάτα"), price: "5.50" },
      { name: t("Low Fat Forest Fruit Cup", "Κύπελλο Φρούτα του Δάσους Χαμηλά Λιπαρά"), price: "4.20" },
      { name: t("Hazelnut Praline Cone", "Χωνάκι Πραλίνα Φουντουκιού") },
      { name: t("No Sugar Strawberry Cup", "Κύπελλο Φράουλα Χωρίς Ζάχαρη"), price: "2.90" },
      { name: t("Scoop of Ice Cream", "Μπάλα Παγωτού"), price: "1.50" },
    ],
  },
  {
    id: "cold-drinks",
    title: t("Cold Drinks", "Κρύα Αναψυκτικά"),
    items: [
      { name: t("Still Water “ΦΑΡΜΑΚΑΣ”", "Νερό «ΦΑΡΜΑΚΑΣ»"), price: "1.00" },
      { name: t("Still Water Glass Bottle “ΑΥΡΑ”", "Νερό Γυάλινο Μπουκάλι «ΑΥΡΑ»"), price: "1.80" },
      { name: t("Sparkling Water “Perrier”", "Ανθρακούχο Νερό «Perrier»") },
      { name: t("Fruit Juice Shots “Feeju”", "Shots Χυμού Φρούτων «Feeju»"), price: "2.80" },
      {
        name: t("“Mangajo” Ice Tea", "Παγωμένο Τσάι «Mangajo»"),
        note: t("Acai Berry, Pomegranate, Lemon Green Tea", "Acai Berry, Ρόδι, Πράσινο Τσάι Λεμόνι"),
        price: "3.20",
      },
      {
        name: t("“Teo” Ice Tea", "Παγωμένο Τσάι «Teo»"),
        note: t(
          "Mountain & Lemon, Peppermint & Turmeric, Lavender & Sage",
          "Βουνού & Λεμόνι, Μέντα & Κουρκουμάς, Λεβάντα & Φασκόμηλο"
        ),
        price: "3.20",
      },
      {
        name: t("“bfresh” Drinks with Agave", "Ροφήματα «bfresh» με Αγαύη"),
        note: t(
          "Lemon & Mango, Pink Grapefruit, Lemonade with Cucumber",
          "Λεμόνι & Μάνγκο, Ροζ Γκρέιπφρουτ, Λεμονάδα με Αγγούρι"
        ),
        price: "4.20",
      },
      {
        name: t("Lipton Ice Teas", "Παγωμένα Τσάγια Lipton"),
        note: t("Peach Low Calorie, Lemon", "Ροδάκινο Χαμηλών Θερμίδων, Λεμόνι"),
        price: "2.20",
      },
      {
        name: t("Schweppes Drinks", "Αναψυκτικά Schweppes"),
        note: t("Pomegranate, Tonic Water, Pink Grapefruit, Soda Water", "Ρόδι, Tonic, Ροζ Γκρέιπφρουτ, Σόδα"),
        price: "3.20",
      },
      {
        name: t("Soft Drinks", "Αναψυκτικά"),
        note: t(
          "Coca-Cola / Zero, Sprite, Fanta, Pepsi, Pepsi Zero, Kean",
          "Coca-Cola / Zero, Sprite, Fanta, Pepsi, Pepsi Zero, Kean"
        ),
        price: "2.95",
      },
      { name: t("Aloe Vera Drinks", "Ροφήματα Αλόης Βέρα"), price: "3.20" },
      { name: t("Airani “Olympos”", "Αϊράνι «Όλυμπος»"), price: "3.20" },
    ],
  },
  {
    id: "juices",
    title: t("Fresh Juices / Lemonades", "Φρέσκοι Χυμοί / Λεμονάδες"),
    legend: "small-large",
    items: [
      { name: t("Fresh Orange Juice", "Φρέσκος Χυμός Πορτοκάλι"), small: "3.20", large: "4.00" },
      { name: t("Fresh Carrot Juice", "Φρέσκος Χυμός Καρότο"), small: "3.20", large: "4.00" },
      { name: t("Fresh Apple Juice", "Φρέσκος Χυμός Μήλο"), small: "3.20", large: "4.00" },
      { name: t("Fresh Mix Juice", "Φρέσκος Χυμός Mix"), small: "3.20", large: "4.00" },
      { name: t("Homemade Lemonade", "Σπιτική Λεμονάδα"), price: "3.20" },
    ],
  },
  {
    id: "extras",
    title: t("Extras & Pre-Packed", "Έξτρα & Συσκευασμένα"),
    footnote: t(
      "If you have a food allergy, please inform a member of our staff.",
      "Αν έχετε τροφική αλλεργία, παρακαλούμε ενημερώστε το προσωπικό μας."
    ),
    items: [
      { name: t("Extra Coffee Shot", "Extra Shot Καφέ"), price: "0.40" },
      { name: t("Extra Oat / Almond / Coconut Milk", "Extra Γάλα Βρώμης / Αμυγδάλου / Καρύδας"), price: "0.40" },
      {
        name: t("Syrup (2 pumps)", "Σιρόπι (2 δόσεις)"),
        note: t("Caramel, Hazelnut, Vanilla", "Καραμέλα, Φουντούκι, Βανίλια"),
        price: "0.40",
      },
      { name: t("Crisps", "Πατατάκια"), price: "3.00" },
      { name: t("“Φούρνος του Ψωμά” Products", "Προϊόντα «Φούρνος του Ψωμά»"), price: "3.00" },
      { name: t("Stroopwafels", "Stroopwafels"), price: "1.70" },
      { name: t("Coffee Beans “La Genovese”", "Κόκκοι Καφέ «La Genovese»") },
    ],
  },
];
