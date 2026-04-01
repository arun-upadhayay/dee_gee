"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GalleryPageHero() {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden bg-obsidian">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85"
          alt="Dee Gee Portfolio"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/65 to-obsidian/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-obsidian/28" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-gold/50" />
          <span className="font-cinzel text-[11px] tracking-[0.6em] uppercase text-gold/55">
            Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-light text-white leading-[1.05] tracking-[-0.02em]"
        >
          Moments We&apos;ve
          <br />
          <em className="text-gold not-italic">Crafted</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 text-white/70 text-[15px] max-w-md leading-relaxed"
        >
          A curated selection from four decades of celebrations — each one
          unique, each one unforgettable.
        </motion.p>
      </div>
    </section>
  );
}
