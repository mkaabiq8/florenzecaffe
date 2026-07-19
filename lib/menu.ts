export type MenuItem = {
  name: string;
  note?: string;
  price?: string;
  hot?: string;
  ice?: string;
  small?: string;
  large?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  tagline?: string;
  legend?: "hot-ice" | "small-large";
  footnote?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee",
    tagline: "Finding peace, one cup at a time.",
    legend: "hot-ice",
    footnote: "All coffees are available decaffeinated.",
    items: [
      { name: "Espresso (Single)", hot: "2.50" },
      { name: "Double Espresso", hot: "3.30" },
      { name: "Freddo Espresso", ice: "3.40" },
      { name: "Freddo Cappuccino", ice: "3.90" },
      { name: "Cappuccino", hot: "3.80" },
      { name: "Americano", hot: "3.40", ice: "3.40" },
      { name: "Latte / Ice Latte", hot: "3.80", ice: "3.80" },
      { name: "Flat White", hot: "3.80", ice: "4.20" },
      { name: "Affogato", ice: "4.00" },
      { name: "Spanish Latte", hot: "4.20", ice: "4.20" },
      { name: "Filter Coffee", note: "French press coffee", hot: "4.20" },
      { name: "Mocha", hot: "3.95", ice: "3.95" },
      { name: "Nescafé / Frappé", hot: "3.40", ice: "3.40" },
      { name: "Cyprus Coffee", hot: "2.80" },
      { name: "Double Cyprus Coffee", hot: "3.30" },
    ],
  },
  {
    id: "non-coffee",
    title: "Non-Coffee",
    legend: "hot-ice",
    items: [
      { name: "Chocolate", hot: "4.00", ice: "4.00" },
      { name: "White Chocolate", hot: "4.00", ice: "4.00" },
      { name: "Matcha", hot: "4.90", ice: "4.90" },
      {
        name: "Milk Shake",
        note: "Chocolate, Strawberry, Vanilla, Banana",
        ice: "4.50",
      },
      { name: "Smoothie", note: "Strawberry, Mango, Banana", ice: "4.50" },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    tagline: "Rooted in tradition. Crafted for the modern palate.",
    legend: "hot-ice",
    items: [
      {
        name: "Black Tea",
        note: "English Breakfast, Earl Grey, India Chai",
        hot: "3.00",
        ice: "3.00",
      },
      {
        name: "Green Tea",
        note: "Sencha, Jasmine, Moroccan Mint, Citronella",
        hot: "3.00",
        ice: "3.00",
      },
      {
        name: "Herbal Tea",
        note: "Chamomile, Peppermint, Wild Berry, Ginger Peach, Red Rooibos",
        hot: "3.00",
        ice: "3.00",
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { name: "Cheese Pie", price: "3.90" },
      { name: "Quiche", price: "4.50" },
      { name: "Spinach & Cheese Pie", price: "3.90" },
      { name: "Fetopita", price: "3.50" },
      { name: "Croissant Plain", price: "2.80" },
      {
        name: "Croissant",
        note: "Pistachio, Cookies, Chocolate, Apricot Jam",
        price: "3.50",
      },
      { name: "Halloumi Twist", price: "3.50" },
      { name: "Olive, Spinach & Onion", price: "3.50" },
      { name: "Olive Twist", price: "3.50" },
      { name: "Tachinopita", price: "4.80" },
    ],
  },
  {
    id: "lunch",
    title: "Light Fare / Lunch",
    items: [
      { name: "Salads", note: "Caesar Salad, Tuna Salad", price: "5.00" },
      {
        name: "Sandwiches",
        note: "Chicken Caesar, Chicken Parm, Chicken Pesto, Turkey Cheese, Turkey Cream Brown, Turkey Cream Fitness",
        price: "4.50",
      },
      { name: "Tuna Sandwich", price: "4.90" },
    ],
  },
  {
    id: "sweets",
    title: "Sweets & Desserts",
    items: [
      { name: "Apple Crumble Pie", price: "4.00" },
      {
        name: "Muffins",
        note: "Chocolate, Apple, Orange, Blueberry",
        price: "3.80",
      },
      { name: "Cinnamon Bun", price: "4.50" },
      { name: "Cheesecake", note: "Blackcurrant, Lemon, Lotus", price: "4.50" },
      { name: "Yogurts", note: "Maple-Banana, Chia", price: "4.50" },
      { name: "Aubin Homemade Selection", price: "4.50" },
      {
        name: "Cookies",
        note: "Vanilla Chocolate Chip, Chocolate, Brookie",
        price: "3.00",
      },
      {
        name: "Piece of Cake",
        note: "Carrot, Chocolate, Red Velvet",
        price: "4.80",
      },
    ],
  },
  {
    id: "sugar-free",
    title: "Sugar-Free Sweets",
    items: [
      { name: "No Sugar Energy Balls", price: "2.20" },
      { name: "No Sugar Peanut Bar", price: "3.00" },
      { name: "No Sugar “Dukissa” Cake", price: "3.00" },
    ],
  },
  {
    id: "ice-cream",
    title: "Ice Creams",
    tagline: "Papafilipou — all-natural ice cream.",
    items: [
      { name: "Madagascar Vanilla Cup", price: "2.00" },
      { name: "Classic Chocolate Cup", price: "2.00" },
      { name: "Fat-Free Vanilla Cup", price: "2.90" },
      { name: "Ice Cream Sandwich", price: "2.90" },
      { name: "Rocket Cone Vanilla", price: "3.00" },
      { name: "Rocket Cone Chocolate", price: "3.00" },
      { name: "Vanilla-Chocolate Cup", price: "5.50" },
      { name: "Low Fat Forest Fruit Cup", price: "4.20" },
      { name: "Hazelnut Praline Cone" },
      { name: "No Sugar Strawberry Cup", price: "2.90" },
      { name: "Scoop of Ice Cream", price: "1.50" },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    items: [
      { name: "Still Water “ΦΑΡΜΑΚΑΣ”", price: "1.00" },
      { name: "Still Water Glass Bottle “ΑΥΡΑ”", price: "1.80" },
      { name: "Sparkling Water “Perrier”" },
      { name: "Fruit Juice Shots “Feeju”", price: "2.80" },
      {
        name: "“Mangajo” Ice Tea",
        note: "Acai Berry, Pomegranate, Lemon Green Tea",
        price: "3.20",
      },
      {
        name: "“Teo” Ice Tea",
        note: "Mountain & Lemon, Peppermint & Turmeric, Lavender & Sage",
        price: "3.20",
      },
      {
        name: "“bfresh” Drinks with Agave",
        note: "Lemon & Mango, Pink Grapefruit, Lemonade with Cucumber",
        price: "4.20",
      },
      { name: "Lipton Ice Teas", note: "Peach Low Calorie, Lemon", price: "2.20" },
      {
        name: "Schweppes Drinks",
        note: "Pomegranate, Tonic Water, Pink Grapefruit, Soda Water",
        price: "3.20",
      },
      {
        name: "Soft Drinks",
        note: "Coca-Cola / Zero, Sprite, Fanta, Pepsi, Pepsi Zero, Kean",
        price: "2.95",
      },
      { name: "Aloe Vera Drinks", price: "3.20" },
      { name: "Airani “Olympos”", price: "3.20" },
    ],
  },
  {
    id: "juices",
    title: "Fresh Juices / Lemonades",
    legend: "small-large",
    items: [
      { name: "Fresh Orange Juice", small: "3.20", large: "4.00" },
      { name: "Fresh Carrot Juice", small: "3.20", large: "4.00" },
      { name: "Fresh Apple Juice", small: "3.20", large: "4.00" },
      { name: "Fresh Mix Juice", small: "3.20", large: "4.00" },
      { name: "Homemade Lemonade", price: "3.20" },
    ],
  },
  {
    id: "extras",
    title: "Extras & Pre-Packed",
    footnote: "If you have a food allergy, please inform a member of our staff.",
    items: [
      { name: "Extra Coffee Shot", price: "0.40" },
      { name: "Extra Oat / Almond / Coconut Milk", price: "0.40" },
      { name: "Syrup (2 pumps)", note: "Caramel, Hazelnut, Vanilla", price: "0.40" },
      { name: "Crisps", price: "3.00" },
      { name: "“Φούρνος του Ψωμά” Products", price: "3.00" },
      { name: "Stroopwafels", price: "1.70" },
      { name: "Coffee Beans “La Genovese”" },
    ],
  },
];
