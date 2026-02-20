// app/sections/WhyChooseUs.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, ChefHat, UtensilsCrossed, Clock } from "lucide-react";
import { GlassCard } from "@/app/components/GlassCard";
import { features } from "@/app/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  Award: <Award className="w-8 h-8" />,
  ChefHat: <ChefHat className="w-8 h-8" />,
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
};

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-violet-400 text-sm font-medium mb-4">
              Our Legacy
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Families Trust Us </span>
              <span className="text-gradient">For Generations</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Since 1985, Dee Gee has been more than a catering service—we're memory makers. 
              Our commitment to excellence has made us the choice for over 10,000 celebrations, 
              from intimate family dinners to royal weddings.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all">
                      {iconMap[feature.icon]}
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/50">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Dee Gee Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-6 neon-glow"
            >
              <div className="text-4xl font-bold text-gradient mb-1">1985</div>
              <div className="text-sm text-white/60">Established</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}