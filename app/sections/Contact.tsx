"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    Icon: Phone,
    label: "Telephone",
    value: "+91 98000 00000",
    href: "tel:+919800000000",
  },
  {
    Icon: Mail,
    label: "Electronic Mail",
    value: "hello@deegeecatering.com",
    href: "mailto:hello@deegeecatering.com",
  },
  {
    Icon: MapPin,
    label: "Our Studio",
    value: "MI House, Civil Lines,\nLudhiana, Punjab, India",
    href: null,
  },
  {
    Icon: Clock,
    label: "Studio Hours",
    value: "Mon – Sat  10am – 7pm\nBy appointment only",
    href: null,
  },
];

const processSteps = [
  { num: "01", label: "Consultation", detail: "Share your vision" },
  { num: "02", label: "Curation", detail: "We design your experience" },
  { num: "03", label: "Creation", detail: "Crafting every detail" },
  { num: "04", label: "Celebration", detail: "Your extraordinary event" },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 4500);
  };

  return (
    <section id="contact" className="py-32 md:py-44 bg-cream-dark relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold" />
            <span className="font-cinzel text-[11px] tracking-[0.5em] uppercase text-gold/80">
              Private Consultation
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.06]">
            Let Us Craft Your
            <br />
            <em className="text-gold not-italic">Celebration</em>
          </h2>
        </motion.div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/8 mb-20 lg:mb-24"
        >
          {processSteps.map((step) => (
            <div key={step.num} className="bg-cream-dark py-7 px-6 text-center">
              <span className="font-cinzel text-[11px] tracking-[0.35em] text-gold/65 block mb-3">
                {step.num}
              </span>
              <span className="font-display text-[15px] text-charcoal block mb-1">
                {step.label}
              </span>
              <span className="font-body text-[12px] text-warm-gray">
                {step.detail}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">

          {/* Left — Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-warm-gray text-[16px] leading-[1.95] mb-12 max-w-sm">
              Every exceptional event begins with a conversation. Share your vision
              and we will begin composing something truly unforgettable.
            </p>

            {/* Gold divider */}
            <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-10" />

            <div className="space-y-0">
              {contactDetails.map(({ Icon, label, value, href }, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 py-5 border-b border-charcoal/8 first:border-t"
                >
                  <Icon className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0 mt-1" />
                  <div>
                    <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray/70 mb-1.5">
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

          {/* Right — Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal placeholder:text-warm-gray/35 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal placeholder:text-warm-gray/35 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal placeholder:text-warm-gray/35 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                    Occasion
                  </label>
                  <select
                    defaultValue=""
                    className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
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
                <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                  Guest Count &amp; Event Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. 300 guests · 15 Feb 2026"
                  className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal placeholder:text-warm-gray/35 outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block font-cinzel text-[10px] tracking-[0.4em] uppercase text-warm-gray mb-3">
                  Your Vision
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your dream celebration…"
                  className="w-full bg-transparent border-b border-charcoal/18 pb-3 text-sm text-charcoal placeholder:text-warm-gray/35 outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              <div className="flex items-center gap-8">
                <button
                  type="submit"
                  disabled={formStatus === "success"}
                  className={`px-10 py-4 font-cinzel text-xs tracking-[0.42em] uppercase transition-all duration-500 ${
                    formStatus === "success"
                      ? "bg-gold text-charcoal cursor-default"
                      : "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                  }`}
                >
                  {formStatus === "success" ? "Enquiry Received" : "Send Enquiry"}
                </button>
                <p className="font-cinzel text-[10px] text-warm-gray/80 leading-relaxed tracking-wide">
                  We respond<br />within 24 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
