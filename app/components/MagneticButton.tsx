// app/components/MagneticButton.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export function MagneticButton({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  variant = "primary" 
}: MagneticButtonProps) {
  const baseStyles = "relative px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-cyan-600 text-white neon-glow hover:shadow-lg hover:shadow-cyan-500/25",
    secondary: "glass text-white hover:bg-white/10 border border-white/10"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}