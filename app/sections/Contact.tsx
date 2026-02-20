// app/sections/Contact.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Begin Your Journey</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Let&apos;s Create Something
              <br />
              <span className="italic text-gold">Extraordinary</span>
            </h2>
            <p className="text-warm-gray text-lg mb-10 leading-relaxed">
              Every great celebration begins with a conversation. Share your vision with us, 
              and let us craft an experience that exceeds your expectations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="font-display text-charcoal mb-1">Visit Our Estate</h4>
                  <p className="text-warm-gray text-sm">123 Culinary Avenue, Gourmet District<br />Food City, FC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="font-display text-charcoal mb-1">Call Us</h4>
                  <p className="text-warm-gray text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="font-display text-charcoal mb-1">Write to Us</h4>
                  <p className="text-warm-gray text-sm">hello@royalfeast.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="font-display text-charcoal mb-1">Consultation Hours</h4>
                  <p className="text-warm-gray text-sm">Monday - Saturday: 10am - 7pm<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 soft-shadow">
              <h3 className="font-display text-2xl text-charcoal mb-6">Request a Consultation</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Event Date</label>
                    <input
                      type="date"
                      className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Number of Guests</label>
                    <input
                      type="number"
                      className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-warm-gray mb-2">Tell Us About Your Event</label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gold/30 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white tracking-widest uppercase text-sm hover:bg-gold-dark transition-colors"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}