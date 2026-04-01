// app/sections/Menu.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { menuItems, menuCategories } from "@/app/lib/data";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 md:py-44 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-5 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Culinary Excellence
            <span className="w-8 h-px bg-gold" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-tight mb-5">
            Signature Menu
          </h2>
          <p className="text-warm-gray max-w-md mx-auto text-[15px] leading-relaxed">
            A curated selection of our most celebrated dishes, each crafted with passion
            and precision by our master chefs.
          </p>
        </motion.div>

        {/* Elegant tab navigation — underline style */}
        <div className="flex flex-wrap justify-center border-b border-charcoal/10 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-4 text-[10px] tracking-[0.32em] uppercase transition-colors duration-300 ${
                activeCategory === cat.id
                  ? "text-charcoal"
                  : "text-warm-gray hover:text-charcoal"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="menuTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu items — editorial list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="group grid md:grid-cols-[1fr_auto] gap-6 items-start py-8 border-b border-charcoal/8 hover:border-gold/25 transition-colors duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="hidden md:inline text-[8px] tracking-[0.3em] uppercase text-gold/70 border border-gold/25 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                <div className="font-display text-2xl text-gold whitespace-nowrap pt-1">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-warm-gray/60 text-sm italic mb-6">
            Custom menus crafted for your occasion upon request
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-cream text-[10px] tracking-[0.38em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-400"
          >
            Request Custom Menu
          </a>
        </div>
      </div>
    </section>
  );
}
