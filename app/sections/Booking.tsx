// app/sections/Booking.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/app/components/SectionHeader";
import { MagneticButton } from "@/app/components/MagneticButton";

export function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    // Handle form submission logic here
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400/50 transition-colors peer";
  const labelClasses = "absolute left-4 top-4 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-slate-950 peer-not-placeholder-shown:px-2";

  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-slate-950 to-cyan-900/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div ref={ref}>
          <SectionHeader
            eyebrow="Book Now"
            title="Start Planning Your"
            gradientWord="Perfect Event"
          />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-3xl p-8 md:p-12 space-y-6 mt-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                required
                className={inputClasses}
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <label className={labelClasses}>Your Name</label>
            </div>

            <div className="relative group">
              <input
                type="email"
                required
                className={inputClasses}
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
              <label className={labelClasses}>Email Address</label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <select
                required
                className={`${inputClasses} appearance-none`}
                value={formState.eventType}
                onChange={(e) => setFormState({...formState, eventType: e.target.value})}
              >
                <option value="" disabled className="bg-slate-950">Event Type</option>
                <option value="wedding" className="bg-slate-950">Wedding</option>
                <option value="corporate" className="bg-slate-950">Corporate</option>
                <option value="birthday" className="bg-slate-950">Birthday</option>
                <option value="anniversary" className="bg-slate-950">Anniversary</option>
                <option value="other" className="bg-slate-950">Other</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 rotate-90 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="date"
                required
                className={`${inputClasses} [color-scheme:dark]`}
                value={formState.date}
                onChange={(e) => setFormState({...formState, date: e.target.value})}
              />
            </div>

            <div className="relative group">
              <input
                type="number"
                required
                min="1"
                className={inputClasses}
                placeholder="Guests"
                value={formState.guests}
                onChange={(e) => setFormState({...formState, guests: e.target.value})}
              />
              <label className={labelClasses}>Number of Guests</label>
            </div>
          </div>

          <div className="relative group">
            <textarea
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="Message"
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
            />
            <label className={labelClasses}>Tell us about your event...</label>
          </div>

          <MagneticButton type="submit" variant="primary" className="w-full group">
            Send Inquiry
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}