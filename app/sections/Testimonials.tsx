"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/app/lib/data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-44 bg-obsidian relative overflow-hidden">
      {/* Top & bottom gold rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Subtle radial glow behind quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/[0.025] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-10 h-px bg-gold/35" />
            <span className="font-cinzel text-[8px] tracking-[0.6em] uppercase text-gold/55">
              Client Stories
            </span>
            <div className="w-10 h-px bg-gold/35" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-[1.05]">
            Words of
            <em className="text-gold not-italic"> Appreciation</em>
          </h2>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-5 mb-16 justify-center"
        >
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-gold/25" />
          <span className="text-gold/35 text-sm select-none">✦</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
          <span className="text-gold/35 text-sm select-none">✦</span>
          <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-gold/25" />
        </motion.div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            {/* Opening mark */}
            <div className="font-display text-[7rem] text-gold/10 leading-none select-none -mb-6">
              &ldquo;
            </div>

            <blockquote className="font-body text-xl md:text-2xl lg:text-[1.55rem] text-white/65 leading-[1.95] italic mb-12 max-w-3xl mx-auto">
              {testimonials[activeIndex].content}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/30 ring-offset-2 ring-offset-obsidian">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="text-left">
                <div className="font-display text-[16px] text-white/90 mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="font-cinzel text-[7px] tracking-[0.35em] uppercase text-gold/50">
                  {testimonials[activeIndex].role} &nbsp;·&nbsp; {testimonials[activeIndex].date}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="flex justify-center items-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-gold"
                  : "w-3 bg-white/18 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
