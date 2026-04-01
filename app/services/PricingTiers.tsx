"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiers = [
  {
    name: "Signature",
    tagline: "Refined Beginnings",
    priceLabel: "Starting from",
    price: "₹8 Lakhs",
    description:
      "An impeccably executed celebration for intimate gatherings. Every element selected with care, every detail delivered with precision.",
    guestRange: "Up to 200 Guests",
    includes: [
      "Full-day catering service",
      "5-course curated menu",
      "Professional service staff",
      "Basic floral arrangements",
      "Standard tableware & linen",
      "Single venue setup",
      "Event coordination",
    ],
    cta: "Enquire",
    highlighted: false,
  },
  {
    name: "Bespoke",
    tagline: "The Dee Gee Experience",
    priceLabel: "Starting from",
    price: "₹18 Lakhs",
    description:
      "Our signature experience — where four decades of mastery meet bespoke design. A celebration that surpasses every expectation.",
    guestRange: "200–600 Guests",
    includes: [
      "Multi-day event coverage",
      "7-course signature menu",
      "Live culinary stations",
      "Premium floral & décor",
      "Mandap or stage design",
      "Ambient lighting design",
      "Dedicated event director",
      "Tastings & walkthroughs",
      "Day-of coordination team",
    ],
    cta: "Reserve This Package",
    highlighted: true,
  },
  {
    name: "Royal Affair",
    tagline: "Beyond Exceptional",
    priceLabel: "Starting from",
    price: "₹35 Lakhs",
    description:
      "An unparalleled luxury experience with no limitations. We command every element of your celebration from first consultation to final farewell.",
    guestRange: "600–2,000+ Guests",
    includes: [
      "Multi-day grand celebration",
      "10-course royal tasting menu",
      "Celebrity chef consultations",
      "Full venue transformation",
      "Architectural lighting design",
      "Premium tenting structure",
      "Complete floral artistry",
      "Entertainment coordination",
      "Dedicated concierge team",
      "Post-event documentation",
    ],
    cta: "Enquire for Bespoke Pricing",
    highlighted: false,
  },
];

export function PricingTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-44 bg-obsidian relative overflow-hidden">
      {/* Top & bottom gold rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-10 h-px bg-gold/35" />
            <span className="font-cinzel text-[11px] tracking-[0.6em] uppercase text-gold/55">
              Investment
            </span>
            <div className="w-10 h-px bg-gold/35" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-[1.05] mb-6">
            Curated Packages
          </h2>
          <p className="text-white/68 text-[15px] max-w-md mx-auto leading-relaxed">
            Every package is a starting point — each celebration we craft is
            ultimately as unique as the families we serve.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04]">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex flex-col p-10 lg:p-12 ${
                tier.highlighted
                  ? "bg-cream text-charcoal"
                  : "bg-obsidian text-white"
              }`}
            >
              {/* Highlight badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-obsidian font-cinzel text-[10px] tracking-[0.45em] uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-8">
                <p className={`font-cinzel text-[10px] tracking-[0.5em] uppercase mb-3 ${
                  tier.highlighted ? "text-gold/70" : "text-gold/50"
                }`}>
                  {tier.tagline}
                </p>
                <h3 className={`font-display text-3xl mb-1 ${
                  tier.highlighted ? "text-charcoal" : "text-white"
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-[13px] leading-relaxed ${
                  tier.highlighted ? "text-warm-gray" : "text-white/62"
                }`}>
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className={`border-t border-b py-6 mb-8 ${
                tier.highlighted ? "border-charcoal/12" : "border-white/8"
              }`}>
                <p className={`font-cinzel text-[10px] tracking-[0.42em] uppercase mb-2 ${
                  tier.highlighted ? "text-warm-gray/90" : "text-white/52"
                }`}>
                  {tier.priceLabel}
                </p>
                <p className={`font-display text-4xl mb-1 ${
                  tier.highlighted ? "text-gold" : "text-gold"
                }`}>
                  {tier.price}
                </p>
                <p className={`font-cinzel text-[11px] tracking-[0.3em] uppercase ${
                  tier.highlighted ? "text-warm-gray/80" : "text-white/52"
                }`}>
                  {tier.guestRange}
                </p>
              </div>

              {/* Includes */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-3 text-[13px] leading-relaxed ${
                    tier.highlighted ? "text-charcoal/75" : "text-white/42"
                  }`}>
                    <span className="w-1 h-1 rounded-full bg-gold/70 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-cinzel text-xs tracking-[0.42em] uppercase py-4 transition-all duration-400 ${
                  tier.highlighted
                    ? "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                    : "border border-gold/40 text-gold hover:bg-gold hover:text-obsidian"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-white/50 text-xs mt-10 max-w-lg mx-auto leading-relaxed"
        >
          All packages are fully customisable. Final pricing varies based on guest count,
          venue, duration, and service scope. Contact us to begin your bespoke proposal.
        </motion.p>
      </div>
    </section>
  );
}
