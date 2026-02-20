// app/components/GlassCard.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -10 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative glass rounded-2xl overflow-hidden ${hover ? 'hover:bg-white/10 cursor-pointer' : ''} transition-all duration-500 ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
      <div className="relative z-10">{children}</div>
      {hover && (
        <div className="absolute -inset-px bg-linear-to-r from-violet-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
      )}
    </motion.div>
  );
}