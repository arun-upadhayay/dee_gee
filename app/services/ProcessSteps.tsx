"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with an unhurried conversation — understanding your vision, preferences, and the story you wish to tell.",
  },
  {
    number: "02",
    title: "Curation",
    description:
      "Our design team crafts a bespoke proposal tailored to your occasion: menu, décor, tenting, and every detail in between.",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "As your day approaches, our master craftsmen and culinary teams begin bringing every element to life.",
  },
  {
    number: "04",
    title: "Celebration",
    description:
      "On your day, a dedicated team of professionals orchestrates every moment so you can simply be present and celebrate.",
  },
];

export function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-cream-dark">
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
            <p className="font-cinzel text-[8px] tracking-[0.6em] uppercase text-gold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              How We Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]">
              Your Journey
              <br />
              <em className="text-gold not-italic">With Us</em>
            </h2>
          </div>
          <a
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-4 border border-gold/40 px-8 py-4 text-gold font-cinzel text-[9px] tracking-[0.42em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-400"
          >
            Begin Your Journey
          </a>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream-dark p-10 lg:p-12 group hover:bg-cream transition-colors duration-400"
            >
              <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold/45 block mb-8 group-hover:text-gold/70 transition-colors duration-400">
                {step.number}
              </span>
              <h3 className="font-display text-2xl text-charcoal mb-4">
                {step.title}
              </h3>
              <p className="text-warm-gray text-[14px] leading-[1.85]">
                {step.description}
              </p>
              {/* Bottom gold bar */}
              <div className="mt-10 w-0 h-px bg-gold group-hover:w-10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-charcoal/8"
        >
          <div>
            <p className="font-display text-2xl text-charcoal mb-1">
              Ready to begin?
            </p>
            <p className="text-warm-gray text-[14px]">
              We welcome enquiries for events six months or more in advance.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 px-10 py-4 bg-charcoal text-cream font-cinzel text-[9px] tracking-[0.42em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-400"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
