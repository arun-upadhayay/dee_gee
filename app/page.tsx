// app/page.tsx
import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/sections/Hero";
import { Story } from "@/app/sections/Story";
import { Services } from "@/app/sections/Services";
import { Menu } from "@/app/sections/Menu";
import { Testimonials } from "@/app/sections/Testimonials";
import { Gallery } from "@/app/sections/Gallery";
import { Footer } from "@/app/sections/Footer";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Story />
      <Services />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}