'use client'

export default function Numbers() {
  const stats = [
    { value: '40+', label: 'Years of\nHeritage' },
    { value: '500+', label: 'Weddings\nCatered' },
    { value: '1000+', label: 'Corporate\nEvents' },
    { value: '4', label: 'Generations\nof Craft' },
  ]

  return (
    <section id="numbers" className="py-28 lg:py-32 px-6 lg:px-12 bg-pink relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23C9A96E' opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />
      
      <div className="max-w-4xl mx-auto relative">
        <span className="font-script text-4xl md:text-5xl text-gold block text-center mb-16 reveal">
          Four Decades of Excellence
        </span>
        
        <div className="relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center py-8 px-5 border-r border-gold/20 last:border-r-0 reveal ${
                  index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 3 ? 'reveal-delay-3' : ''
                }`}
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-text-dark leading-none mb-2">
                  {stat.value.includes('+') ? (
                    <>
                      {stat.value.replace('+', '')}<sup className="text-sm align-super text-gold">+</sup>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-[8px] tracking-[0.45em] uppercase text-text-muted leading-relaxed whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}