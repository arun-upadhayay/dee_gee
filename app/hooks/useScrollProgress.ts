// app/hooks/useScrollProgress.ts
"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface ScrollProgressOptions {
  target: RefObject<HTMLElement>;
  offset?: ["start start" | "end start", "start start" | "end start"];
}

export function useScrollProgress({ target, offset = ["start start", "end start"] }: ScrollProgressOptions) {
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return { scrollYProgress, y, opacity, scale };
}