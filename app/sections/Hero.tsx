"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background - Quiet, Atmospheric */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            // src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1920&q=90"
            src={"/image4.png"}
            alt=""
            fill
            priority
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/70 to-charcoal/85" />
        <div className="absolute inset-0 opacity-5 mix-blend-overlay"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(1) rotate(0)"%3E%3Crect x="0" y="0" width="100%25" height="100%25" fill="transparent"/%3E%3Cpath d="M20 0 L20 40 M0 20 L40 20" stroke="%23ffffff" stroke-width="0.25" opacity="0.2"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23a)"/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />
      </motion.div>

      {/* Content - Pure, Quiet, Confident */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
      >
        {/* No badge. No establishment. Just the craft. */}
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl 
                         font-light tracking-tight text-white mb-3">
            Crafting
          </span>
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl 
                         font-light tracking-tight text-white">
            Moments
          </span>
          <span className="relative inline-block mt-4">
            <span className="font-script text-6xl md:text-7xl lg:text-8xl 
                           text-gold font-light italic">
              of Distinction
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-base text-white/50 max-w-xl mx-auto mb-16 
                     font-light tracking-wide leading-relaxed"
        >
          Refined cuisine, seamless execution, and enduring experiences
          for life's most meaningful celebrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative px-0 py-2 overflow-hidden"
          >
            <span className="relative text-white tracking-[0.4em] uppercase text-[11px] 
                           font-light flex items-center gap-3">
              INQUIRE
              <span className="transform transition-transform duration-300 
                             group-hover:translate-x-1.5 text-gold text-lg">→</span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gold/60 
                           group-hover:w-full transition-all duration-700" />
          </a>
          <span className="text-white/10 hidden sm:block">|</span>
          <a
            href="#services"
            className="group relative px-0 py-2 overflow-hidden"
          >
            <span className="relative text-white/50 hover:text-white tracking-[0.4em] 
                           uppercase text-[11px] font-light transition-colors duration-300">
            COLLECTION
            </span>
          </a>
        </motion.div>

        {/* The only mark of time - quiet, poetic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute -left-24 bottom-1/2 translate-y-1/2 -rotate-90 
                     hidden lg:block"
        >
          <span className="text-[9px] tracking-[0.8em] uppercase text-white/20 
                         font-light">
            FOUR GENERATIONS
          </span>
        </motion.div>

        {/* Craft as heritage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -right-24 bottom-1/2 translate-y-1/2 rotate-90 
                     hidden lg:block"
        >
          <span className="text-[9px] tracking-[0.8em] uppercase text-white/20 
                         font-light">
            SINCE 1985
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll - Barely there */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[7px] tracking-[0.8em] uppercase text-white/20">
            EXPLORE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-white/20" />
        </motion.div>
      </motion.div>

      {/* No stats. No numbers. No validation. Just presence. */}
      
      {/* Single, quiet line */}
      <div className="absolute bottom-20 left-12 right-12 h-px bg-linear-to-r 
                     from-transparent via-white/10 to-transparent" />
    </section>
  );
}