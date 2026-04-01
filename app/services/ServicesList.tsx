"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { services } from "@/app/lib/data";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const serviceDetails: Record<string, string[]> = {
  "Wedding Feasts": [
    "Multi-course tasting menus",
    "Live cooking stations",
    "Custom family recipes honoured",
    "Dietary & allergenic accommodations",
    "400+ dishes in repertoire",
  ],
  "Elegant Tenting": [
    "Climate-controlled marquees",
    "Up to 2,000 guest capacity",
    "Flooring, lining & draping",
    "Custom entrance structures",
    "Full logistics management",
  ],
  "Floral & Décor": [
    "Fresh floral arrangements daily",
    "Centrepiece & tablescape design",
    "Aisle & mandap styling",
    "Seasonal bloom sourcing",
    "Installation & takedown included",
  ],
  "Corporate Galas": [
    "Branded menu curation",
    "Cocktail & canapé service",
    "Black-tie dining service",
    "AV & stage coordination",
    "Executive dietary preferences",
  ],
  "Mandap & Stage": [
    "Traditional & contemporary designs",
    "Premium fabrics & materials",
    "Custom dimension builds",
    "Flower & drapery integration",
    "Sacred structure expertise",
  ],
  "Lighting Design": [
    "Architectural facade lighting",
    "Ambient & wash lighting",
    "Intelligent fixture programming",
    "Monogram projection",
    "Sunset to sunrise coverage",
  ],
};

export function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-xl"
        >
          <p className="font-cinzel text-[11px] tracking-[0.6em] uppercase text-gold mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Six Pillars of Excellence
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]">
            Every Detail,
            <br />
            <em className="text-gold not-italic">Perfected</em>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid md:grid-cols-[auto_1fr_auto] gap-0 border-b border-charcoal/8 hover:border-gold/30 transition-colors duration-400 py-10 items-start"
            >
              {/* Number */}
              <div className="hidden md:block font-display text-5xl text-gold/18 leading-none select-none mr-10 group-hover:text-gold/30 transition-colors duration-500 w-16">
                {romanNumerals[index]}
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Image */}
                <div className="relative w-full md:w-48 h-36 md:h-32 overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-cinzel text-[10px] tracking-[0.45em] uppercase text-gold/60 mb-2">
                    {service.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray text-[15px] leading-relaxed mb-5 max-w-md">
                    {service.description}
                  </p>
                  {/* Feature list */}
                  <ul className="space-y-1.5">
                    {(serviceDetails[service.title] || []).map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-[13px] text-warm-gray/80">
                        <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA arrow */}
              <div className="hidden md:flex items-center ml-10">
                <a
                  href="#contact"
                  className="group/btn flex items-center gap-2 font-cinzel text-[11px] tracking-[0.4em] uppercase text-gold/50 hover:text-gold transition-colors duration-300"
                >
                  Enquire
                  <span className="w-4 h-px bg-gold/40 group-hover/btn:w-7 group-hover/btn:bg-gold transition-all duration-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
