// app/components/SectionHeader.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  gradientWord: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, gradientWord, description, centered = true }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={centered ? "text-center" : ""}
    >
      <span className="inline-block px-4 py-1 rounded-full glass text-cyan-400 text-sm font-medium mb-4">
        {eyebrow}
      </span>
      <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-white">{title} </span>
        <span className="text-gradient">{gradientWord}</span>
      </h2>
      {description && (
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}