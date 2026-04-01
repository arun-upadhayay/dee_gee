"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socialIcons = [
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const footerLinks: Record<string, string[]> = {
  Company: ["About Us", "Our Legacy", "The Team", "Careers"],
  Services: [
    "Wedding Catering",
    "Corporate Events",
    "Private Celebrations",
    "Event Planning",
    "Beverage Service",
  ],
  Connect: ["Contact", "Get a Quote", "FAQs", "Venue Partners"],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0C]">

      {/* CTA strip */}
      <div className="border-b border-white/5 px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.42em] uppercase text-gold/55 mb-3">
              Begin Planning
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">
              Ready to create something
              <br />
              <em className="text-gold not-italic">extraordinary?</em>
            </h3>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-10 py-4 border border-gold/40 text-gold text-[9px] tracking-[0.42em] uppercase hover:bg-gold hover:text-black transition-all duration-400"
          >
            Start Planning →
          </a>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative w-44 h-14">
              <Image
                src="/logo12.png"
                alt="Dee Gee Catering"
                fill
                className="object-contain object-left brightness-0 invert opacity-90"
              />
            </div>

            <div className="space-y-2">
              <p className="text-[8px] tracking-[0.42em] uppercase text-gold/45">
                Est. 1985 · Ludhiana, India
              </p>
              <p className="text-white/38 leading-relaxed text-sm max-w-xs">
                Imaginative catering for discerning hosts — where four decades of
                culinary excellence meet contemporary elegance.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              {socialIcons.map(({ label, svg }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/38 hover:text-gold hover:border-gold/40 transition-all duration-300"
                  aria-label={label}
                >
                  {svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[8px] tracking-[0.38em] uppercase text-gold/55 mb-6">
                  {title}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/33 hover:text-white text-sm transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gold gradient divider */}
        <div className="my-14 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/22">
          <p>© {currentYear} Dee Gee Catering. All rights reserved.</p>

          <div className="flex items-center gap-2 text-white/14">
            <span className="w-4 h-px bg-white/10" />
            <span className="tracking-[0.22em] uppercase text-[9px]">
              Crafted with excellence
            </span>
            <span className="w-4 h-px bg-white/10" />
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/55 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white/55 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-white/55 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
