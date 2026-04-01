'use client'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 lg:py-36 px-6 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="reveal">
          <span className="section-label">Our Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-text-dark mb-7">
            Where Tradition Meets<br />
            <em className="italic text-gold not-italic">Timeless Excellence</em>
          </h2>
          <p className="text-text-muted leading-relaxed text-sm md:text-base mb-5">
            For over 40 years, Dee Gee Catering has been the trusted choice of discerning families and institutions who understand that exceptional catering is not merely about food — it is about orchestrating an entire sensory world.
          </p>
          <p className="text-text-muted leading-relaxed text-sm md:text-base mb-9">
            We believe every celebration deserves a singular signature. Our chefs draw from generations of culinary heritage, marrying classical technique with the finest seasonal ingredients to compose menus that are remembered long after the evening fades.
          </p>
          <div className="flex items-center gap-5">
            <div className="w-8 h-px bg-gold" />
            <span className="font-script text-2xl text-gold">Dee Gee Legacy</span>
          </div>
        </div>

        <div className="relative reveal reveal-delay-2">
          <div className="aspect-[3/4] bg-cream-dark relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-cream-dark via-pink to-gold-pale flex items-center justify-center">
              <span className="font-script text-5xl text-gold/30">Since 1985</span>
            </div>
          </div>
          <div className="absolute -top-5 -right-5 w-full h-full border border-gold/30 -z-10" />
          <div className="absolute -bottom-6 -left-6 bg-cream border border-gold/30 p-5 lg:p-7">
            <div className="font-display text-4xl lg:text-5xl font-light text-gold leading-none">
              40<sup className="text-sm align-super">+</sup>
            </div>
            <div className="text-[8px] tracking-[0.4em] uppercase text-text-muted mt-1">
              Years of<br />Culinary Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}