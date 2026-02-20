// app/sections/Story.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Dee Gee Heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blush p-8 max-w-xs hidden md:block">
              <p className="font-script text-3xl text-gold mb-2">Since 1985</p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Four generations of culinary excellence and unwavering commitment to perfection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Heritage</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="italic text-gold">Exceptional Taste</span>
            </h2>
            <div className="w-20 h-px bg-gold mb-8" />
            
            <div className="space-y-6 text-warm-gray text-lg leading-relaxed">
              <p>
                What began as a modest family kitchen in 1985 has blossomed into one of the 
                most respected catering establishments in the region. Dee Gee was founded 
                on a simple principle: that every celebration deserves food that honors the 
                occasion.
              </p>
              <p>
                For five decades, we have had the privilege of serving royalty, dignitaries, 
                and families celebrating their most precious moments. Our recipes have been 
                passed down through four generations, each adding their own touch while 
                preserving the authentic flavors that have become our signature.
              </p>
              <p>
                Today, under the guidance of our master chefs and event artisans, we continue 
                to blend time-honored traditions with contemporary elegance, creating 
                experiences that linger in memory long after the last course.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <div className="font-display text-3xl text-gold">4</div>
                <div className="text-xs tracking-widest uppercase text-warm-gray mt-1">Generations</div>
              </div>
              <div className="w-px h-12 bg-gold/30" />
              <div className="text-center">
                <div className="font-display text-3xl text-gold">50+</div>
                <div className="text-xs tracking-widest uppercase text-warm-gray mt-1">Years</div>
              </div>
              <div className="w-px h-12 bg-gold/30" />
              <div className="text-center">
                <div className="font-display text-3xl text-gold">10k+</div>
                <div className="text-xs tracking-widest uppercase text-warm-gray mt-1">Events</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}