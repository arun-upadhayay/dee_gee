import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { GalleryPageHero } from "@/app/gallery/GalleryPageHero";
import { Gallery } from "@/app/sections/Gallery";

export const metadata = {
  title: "Portfolio | Dee Gee Catering & Events",
  description: "A curated portfolio of celebrations crafted by Dee Gee — weddings, corporate galas, private dinners, and bespoke events across Ludhiana and Punjab.",
};

export default function GalleryPage() {
  return (
    <main className="bg-cream">
      <Navigation />
      <GalleryPageHero />
      <Gallery />
      <Footer />
    </main>
  );
}
