// app/components/AnimatedCounter.tsx
"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");
  
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(numericValue);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, spring, numericValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 flex items-center justify-center">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-white/50">{label}</div>
    </motion.div>
  );
}