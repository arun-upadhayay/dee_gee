// app/sections/Menu.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menuItems, menuCategories } from "@/app/lib/data";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Culinary Excellence</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Signature Menu
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            A curated selection of our most celebrated dishes, each crafted with passion and precision.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-sm tracking-widest uppercase transition-all ${
                activeCategory === cat.id
                  ? "bg-gold text-white"
                  : "bg-transparent text-warm-gray hover:text-gold border border-gold/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white soft-shadow group hover-lift"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
                    <span className="text-gold font-display text-lg">{item.price}</span>
                  </div>
                  <p className="text-warm-gray text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase px-2 py-1 bg-cream-dark text-warm-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <p className="text-warm-gray italic mb-4">View our complete menu offerings</p>
          <button className="px-8 py-3 border border-charcoal text-charcoal tracking-widest uppercase text-sm hover:bg-charcoal hover:text-white transition-colors">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}