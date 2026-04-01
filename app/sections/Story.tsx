// app/sections/Story.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Years" },
  { value: "10k+", label: "Events" },
  { value: "98%", label: "Satisfaction" },
];

export function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 md:py-44 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-gold" />
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase">Our Heritage</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          {/* Left — Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Dot grid accent */}
            <div
              className="absolute -top-8 -left-8 w-36 h-36 opacity-20 pointer-events-none z-0"
              style={{
                backgroundImage: "radial-gradient(circle, #D4AF37 1.2px, transparent 1.2px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Main image */}
            <div className="relative aspect-3/4 overflow-hidden z-10">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=85"
                alt="Dee Gee Heritage Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Inset gold frame */}
              <div className="absolute inset-4 border border-gold/30 pointer-events-none z-10" />
            </div>

            {/* Heritage badge */}
            <div className="absolute -bottom-10 -right-4 md:-right-8 bg-[#1C1917] px-8 py-8 z-20 max-w-[230px]">
              <p className="font-display text-4xl text-gold italic leading-none mb-1">Since</p>
              <p className="font-display text-5xl text-white leading-none">1985</p>
              <div className="mt-4 w-8 h-px bg-gold/50" />
              <p className="mt-3 text-[9px] tracking-[0.32em] uppercase text-white/40 leading-relaxed">
                Four generations of<br />culinary craft
              </p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pt-0 lg:pt-20"
          >
            <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.08] mb-8">
              A Legacy of
              <br />
              <em className="text-gold not-italic">Exceptional</em>
              <br />
              Taste
            </h2>

            <div className="w-16 h-px bg-gold mb-10" />

            <div className="space-y-5 text-warm-gray text-[16px] leading-[1.95]">
              <p>
                What began as a modest family kitchen in 1985 has blossomed into one of
                the most revered catering establishments in Ludhiana, Punjab. Dee Gee was founded
                on a single belief — that every celebration deserves food which truly
                honours the occasion.
              </p>
              <p>
                For five decades we have had the privilege of serving dignitaries,
                and families celebrating their most precious moments. Our recipes pass through
                each generation, every hand adding their signature while preserving the
                authentic flavours that have become our legacy.
              </p>
              <p>
                Today, under the guidance of our master chefs, we continue to marry
                time-honoured tradition with contemporary elegance — crafting experiences
                that linger in memory long after the last course.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-px bg-gold/20">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-cream p-6 text-center">
                  <div className="font-display text-3xl text-gold mb-1">{stat.value}</div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-warm-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA link */}
            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-3 mt-12 text-charcoal font-display text-lg border-b border-charcoal/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Begin Your Journey
              <span className="text-base">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
