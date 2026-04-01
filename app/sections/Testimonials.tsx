// app/sections/Testimonials.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/app/lib/data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-44 bg-[#0F0F0E] relative overflow-hidden">
      {/* Top gold gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      {/* Giant background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[22vw] text-white/[0.018] leading-none whitespace-nowrap">
          WORDS
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold/60 flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold/50" />
            Client Stories
            <span className="w-8 h-px bg-gold/50" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-tight">
            Words of
            <em className="text-gold not-italic"> Appreciation</em>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center"
          >
            {/* Large decorative opening quote */}
            <div className="font-display text-[9rem] text-gold/12 leading-none select-none -mb-8">
              &ldquo;
            </div>

            <blockquote className="font-display text-xl md:text-2xl lg:text-[1.6rem] text-white/75 leading-[1.9] italic mb-12 max-w-3xl mx-auto">
              {testimonials[activeIndex].content}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-2 ring-offset-[#0F0F0E]">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-display text-[17px] text-white">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-gold/60 mt-1">
                  {testimonials[activeIndex].role} · {testimonials[activeIndex].date}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-gold"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gold gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
