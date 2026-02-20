// app/sections/Footer.tsx
"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl mb-4">Dee Gee</h3>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Crafting extraordinary celebrations since 1985. We bring five decades of 
              culinary excellence and impeccable service to your most cherished moments.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menus</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">Services</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Private Celebrations</li>
              <li>Tent & Décor</li>
              <li>Event Planning</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Dee Gee Catering. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Crafted with devotion for life&apos;s celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}