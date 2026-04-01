"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { services } from "@/app/lib/data";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-44 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8"
        >
          <div>
            <p className="font-cinzel text-[11px] tracking-[0.45em] uppercase text-gold/70 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold/60" />
              What We Offer
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white leading-[1.05]">
              Bespoke Services
            </h2>
          </div>
          <p className="text-white/65 max-w-sm text-[15px] leading-relaxed md:text-right">
            From intimate gatherings to grand celebrations, every event receives
            our unwavering attention to detail.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative aspect-4/5 overflow-hidden cursor-pointer bg-obsidian"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/25 to-transparent" />

              {/* Gold border on hover */}
              <div className="absolute inset-2 border border-transparent group-hover:border-gold/35 transition-all duration-500" />

              {/* Roman numeral */}
              <span className="absolute top-6 right-7 font-display text-5xl text-gold/15 leading-none select-none group-hover:text-gold/35 transition-colors duration-500">
                {romanNumerals[index]}
              </span>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-cinzel text-[10px] tracking-[0.38em] uppercase text-gold/70 mb-3">
                  {service.category}
                </p>
                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-16"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold/50 text-gold font-cinzel text-xs tracking-[0.38em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-400"
          >
            View All Services &amp; Pricing
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-white/60 font-cinzel text-xs tracking-[0.38em] uppercase hover:text-white/85 transition-colors duration-300"
          >
            Enquire Directly
            <span className="w-5 h-px bg-white/25" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
