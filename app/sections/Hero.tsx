"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "40+", label: "Years of Heritage" },
  { value: "500+", label: "Weddings Crafted" },
  { value: "10,000+", label: "Events Delivered" },
  { value: "4", label: "Generations" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-obsidian"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/image4.png"
          alt="Dee Gee — Grand Celebration"
          fill
          priority
          className="object-cover"
          quality={95}
        />
        {/* Cinematic layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/94 via-obsidian/68 to-obsidian/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-obsidian/25" />
      </motion.div>

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-obsidian/50 to-transparent z-[1] pointer-events-none" />

      {/* Decorative vertical line — right side */}
      <div className="absolute right-[7%] top-0 bottom-0 z-[2] hidden xl:flex flex-col items-center justify-center pointer-events-none">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-gold/20" />
        <div className="my-3 w-px h-full max-h-[180px] bg-gold/10" />
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-gold/20" />
      </div>

      {/* Main Content — bottom-left editorial anchoring */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-8 md:px-14 lg:px-[8%] pb-20 lg:pb-28 pt-28"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-5 mb-10 lg:mb-12"
        >
          <div className="w-10 h-px bg-gold/50" />
          <span className="font-cinzel text-[11px] tracking-[0.55em] uppercase text-gold/75">
            Est. 1985 &nbsp;·&nbsp; Ludhiana, Punjab
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 lg:mb-10"
        >
          <span className="block font-display text-[clamp(3rem,7.5vw,7rem)] font-light tracking-[-0.025em] text-white leading-[0.9]">
            Crafting
          </span>
          <span className="block font-display text-[clamp(3rem,7.5vw,7rem)] font-light tracking-[-0.025em] text-white leading-[0.9] mt-1">
            Moments
          </span>
          <span className="block font-script text-[clamp(2.6rem,6.2vw,5.8rem)] text-gold leading-[1.2] mt-3">
            of Distinction
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
          className="text-white/72 text-[16px] max-w-[440px] leading-[2] mb-12 lg:mb-14 font-light"
        >
          Four generations of culinary mastery — refining tradition into
          extraordinary celebrations since 1985.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-20 lg:mb-24"
        >
          <a
            href="#contact"
            className="group inline-flex items-center"
          >
            <span className="px-8 py-3.5 border border-gold/60 font-cinzel text-xs tracking-[0.42em] uppercase text-white hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-500">
              Begin Planning
            </span>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-4"
          >
            <span className="font-cinzel text-xs tracking-[0.42em] uppercase text-white/55 group-hover:text-white/80 transition-colors duration-300">
              Our Services
            </span>
            <span className="w-8 h-px bg-white/15 group-hover:w-12 group-hover:bg-white/35 transition-all duration-500" />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="flex flex-wrap items-stretch border-t border-white/[0.055] pt-8 gap-y-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`pr-8 lg:pr-14 ${
                i > 0 ? "pl-8 lg:pl-14 border-l border-white/[0.055]" : ""
              }`}
            >
              <div className="font-display text-2xl lg:text-3xl text-gold leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 right-10 lg:right-[7%] z-10 flex flex-col items-center gap-4 pointer-events-none"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent origin-top"
        />
        <span className="font-cinzel text-[9px] tracking-[0.55em] uppercase text-white/38">
          Scroll
        </span>
      </motion.div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-obsidian/30 to-transparent z-[1] pointer-events-none" />
    </section>
  );
}
