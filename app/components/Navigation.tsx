"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Our Story", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Menus", href: "/#menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-cream/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/logo12.png"
            alt="Dee Gee Catering & Events"
            width={140}
            height={140}
            priority
            className={`transition-all duration-400 object-contain ${
              isScrolled ? "h-12 w-auto" : "h-14 w-auto"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative font-cinzel text-[9px] tracking-[0.38em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white/80"
              } hover:text-gold`}
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-400 group-hover:w-full" />
            </a>
          ))}

          <a
            href="/#contact"
            className={`ml-2 px-6 py-2.5 border font-cinzel text-[9px] tracking-[0.38em] uppercase transition-all duration-400 ${
              isScrolled
                ? "border-gold/60 text-gold hover:bg-gold hover:text-obsidian"
                : "border-white/30 text-white hover:border-gold hover:text-gold"
            }`}
          >
            Inquire
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen
            ? <X className="w-5 h-5" />
            : <Menu className="w-5 h-5" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-cream border-t border-gold/15 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-cinzel text-[10px] tracking-[0.45em] uppercase text-charcoal hover:text-gold transition-colors duration-300 py-4 border-b border-charcoal/6 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/#contact"
                className="mt-6 px-6 py-3 bg-charcoal text-cream text-center font-cinzel text-[9px] tracking-[0.42em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Begin Planning
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
