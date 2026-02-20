// app/types/index.ts
export interface ServiceItem {
  id: number;
  category: "catering" | "tent" | "decoration";
  title: string;
  description: string;
  icon: string;
}

export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}