"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden bg-obsidian">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
          alt="Dee Gee Services"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/92 via-obsidian/72 to-obsidian/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/30" />
      </div>

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-20 w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <a href="/" className="font-cinzel text-[8px] tracking-[0.5em] uppercase text-white/30 hover:text-white/55 transition-colors">
            Home
          </a>
          <span className="text-white/20 text-[10px]">/</span>
          <span className="font-cinzel text-[8px] tracking-[0.5em] uppercase text-gold/60">
            Services
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-gold/50" />
          <span className="font-cinzel text-[8px] tracking-[0.6em] uppercase text-gold/55">
            What We Offer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-light text-white leading-[1.05] tracking-[-0.02em]"
        >
          Bespoke Services &amp;
          <br />
          <em className="text-gold not-italic">Packages</em>
        </motion.h1>
      </div>
    </section>
  );
}
