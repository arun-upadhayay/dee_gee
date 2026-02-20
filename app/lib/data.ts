// app/lib/data.ts
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Menus", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    id: 1,
    category: "catering",
    title: "Wedding Feasts",
    description: "Bespoke culinary experiences crafted for your once-in-a-lifetime celebration",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 2,
    category: "tent",
    title: "Elegant Tenting",
    description: "Sophisticated shelter solutions that transform any space into a grand venue",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: 3,
    category: "decoration",
    title: "Floral & Décor",
    description: "Artistic arrangements and styling that capture the essence of your vision",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: 4,
    category: "catering",
    title: "Corporate Galas",
    description: "Refined dining experiences that impress clients and honor achievements",
    image: "https://images.unsplash.com/photo-1555244162-803279f50793?w=800&q=80",
  },
  {
    id: 5,
    category: "tent",
    title: "Mandap & Stage",
    description: "Sacred ceremonial structures built with reverence and artistic excellence",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    id: 6,
    category: "decoration",
    title: "Lighting Design",
    description: "Atmospheric illumination that creates magic as the sun sets",
    image: "https://images.unsplash.com/photo-1478146896981-b80c463ab360?w=800&q=80",
  },
];

export const menuCategories = [
  { id: "appetizers", name: "Hors d'Oeuvres", description: "Elegant beginnings" },
  { id: "mains", name: "Main Courses", description: "Culinary masterpieces" },
  { id: "desserts", name: "Desserts", description: "Sweet finales" },
  { id: "beverages", name: "Beverages", description: "Refined refreshments" },
];

export const menuItems = [
  {
    id: 1,
    category: "appetizers",
    name: "Royal Paneer Tikka",
    description: "Cottage cheese marinated in saffron and cardamom, grilled in clay oven",
    price: "$12",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    tags: ["Vegetarian", "Signature"],
  },
  {
    id: 2,
    category: "appetizers",
    name: "Tandoori Prawns",
    description: "Jumbo prawns marinated in yogurt and royal spices",
    price: "$18",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80",
    tags: ["Seafood", "Chef's Choice"],
  },
  {
    id: 3,
    category: "mains",
    name: "Butter Chicken",
    description: "Tender chicken in velvety tomato-cream sauce with fenugreek",
    price: "$24",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    tags: ["Classic", "Gluten Free"],
  },
  {
    id: 4,
    category: "mains",
    name: "Royal Biryani",
    description: "Fragrant basmati rice with saffron, rose water, and your choice of protein",
    price: "$28",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    tags: ["Signature", "Serves Two"],
  },
  {
    id: 5,
    category: "desserts",
    name: "Gulab Jamun",
    description: "Warm milk dumplings in cardamom-scented rose syrup",
    price: "$8",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    tags: ["Traditional", "Warm"],
  },
  {
    id: 6,
    category: "desserts",
    name: "Saffron Panna Cotta",
    description: "Creamy Italian custard infused with Kashmiri saffron",
    price: "$12",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    tags: ["Fusion", "Cold"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun Sharma",
    role: "Wedding Celebration",
    content: "Dee Gee transformed our wedding into a royal affair. Every detail was perfection—from the mandap to the final dessert. Our guests are still talking about the food six months later.",
    image: "https://images.unsplash.com/photo-1621624666561-84d034f4d920?w=400&q=80",
    date: "December 2023",
  },
  {
    id: 2,
    name: "The Mehta Family",
    role: "Golden Anniversary",
    content: "For our parents' 50th anniversary, we wanted something truly special. Dee Gee delivered not just a meal, but a journey through memories with every course.",
    image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?w=400&q=80",
    date: "November 2023",
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Corporate CEO",
    content: "We've worked with Dee Gee for our annual gala for fifteen years. Their consistency, professionalism, and ability to innovate while honoring tradition is unmatched.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    date: "October 2023",
  },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", title: "Grand Wedding Reception", category: "Weddings" },
  { id: 2, src: "https://images.unsplash.com/photo-1555244162-803279f50793?w=1200&q=80", title: "Elegant Table Setting", category: "Details" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80", title: "Corporate Gala Dinner", category: "Corporate" },
  { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80", title: "Floral Mandap Design", category: "Decor" },
  { id: 5, src: "https://images.unsplash.com/photo-1478146896981-b80c463ab360?w=1200&q=80", title: "Evening Lighting", category: "Ambiance" },
  { id: 6, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80", title: "Chef's Presentation", category: "Cuisine" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Events Catered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "", label: "Generations of Craft" },
];