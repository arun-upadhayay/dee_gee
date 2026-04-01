// app/sections/Contact.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 98000 00000",
    href: "tel:+919800000000",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@deegeecatering.com",
    href: "mailto:hello@deegeecatering.com",
  },
  {
    Icon: MapPin,
    label: "Studio",
    value: "MI House, Civil Lines,\nLudhiana, Punjab, India",
    href: null,
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon – Sat  10am – 7pm\nBy appointment only",
    href: null,
  },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-32 md:py-44 bg-cream-dark relative overflow-hidden">

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18vw] text-charcoal/[0.022] leading-none whitespace-nowrap tracking-wider">
          CONTACT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Begin Your Journey
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.08]">
            Let Us Craft Your
            <br />
            <em className="text-gold not-italic">Celebration</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-warm-gray text-[16px] leading-[1.9] mb-12">
              With over four decades of experience, every exceptional event begins with
              a conversation. Share your vision with us, and we will begin composing
              something truly unforgettable.
            </p>

            <div className="space-y-0">
              {contactDetails.map(({ Icon, label, value, href }, idx) => (
                <div key={idx} className="flex gap-5 py-5 border-b border-charcoal/10 first:border-t">
                  <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-1.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-charcoal text-sm leading-relaxed hover:text-gold transition-colors duration-300 whitespace-pre-line"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-charcoal text-sm leading-relaxed whitespace-pre-line">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                    Occasion
                  </label>
                  <select
                    defaultValue=""
                    className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Type</option>
                    <option>Wedding / Shaadi</option>
                    <option>Corporate Gala</option>
                    <option>Private Dinner</option>
                    <option>Festival Celebration</option>
                    <option>Heritage Banquet</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                  Guest Count &amp; Event Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. 300 guests · 15 Feb 2026"
                  className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-[8px] tracking-[0.38em] uppercase text-warm-gray mb-3">
                  Your Vision
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your dream celebration…"
                  className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-sm text-charcoal placeholder:text-warm-gray/40 outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  disabled={formStatus === "success"}
                  className={`px-10 py-4 text-[9px] tracking-[0.42em] uppercase transition-all duration-400 ${
                    formStatus === "success"
                      ? "bg-gold text-charcoal cursor-default"
                      : "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                  }`}
                >
                  {formStatus === "success" ? "Enquiry Received ✓" : "Send Enquiry →"}
                </button>
                <p className="text-[10px] text-warm-gray/50 leading-relaxed">
                  We respond within
                  <br />
                  24 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
