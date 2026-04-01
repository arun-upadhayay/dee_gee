// app/sections/Gallery.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/app/lib/data";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Details", "Corporate", "Decor", "Ambiance", "Cuisine"];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-32 md:py-44 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header + filter row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10"
        >
          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Portfolio
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.08]">
              Moments We&apos;ve
              <br />
              Crafted
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[9px] tracking-[0.32em] uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-charcoal text-cream"
                    : "text-warm-gray border border-charcoal/20 hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`relative overflow-hidden cursor-pointer group ${
                  index === 0 || index === 3 ? "aspect-3/4" : "aspect-square"
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Dark hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-400" />

                {/* Gold border reveal */}
                <div className="absolute inset-2 border border-transparent group-hover:border-gold/45 transition-all duration-500" />

                {/* Caption */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white text-center p-6">
                  <p className="text-[8px] tracking-[0.42em] uppercase text-gold mb-2">
                    {image.category}
                  </p>
                  <h3 className="font-display text-lg md:text-xl leading-tight">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="font-display text-2xl text-white mb-1.5">
                {selectedImage.title}
              </p>
              <p className="text-[9px] tracking-[0.42em] uppercase text-gold">
                {selectedImage.category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
