"use client";
import { useReveal } from "@/components/useReveal";

const testimonials = [
  { name: "Michael R.", rating: 5, text: "Great pricing and immaculate quality. My suit fits like it was made for me — because it was. Highly recommend PJD to anyone in NYC.", delay: "delay-100" },
  { name: "Sarah T.", rating: 5, text: "Fair prices and, most importantly, outstanding tailoring service. They altered my wedding dress perfectly. I couldn't be happier.", delay: "delay-200" },
  { name: "James L.", rating: 5, text: "I can highly recommend this place. The team is professional, attentive, and the results speak for themselves. My go-to tailor in Manhattan.", delay: "delay-300" },
  { name: "Diana M.", rating: 5, text: "Brought in a blazer that never fit right. They transformed it completely. Fast turnaround and very reasonable pricing.", delay: "delay-400" },
];

export default function Testimonials() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-32 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 reveal">
          <div>
            <span className="section-label block mb-3">Client Reviews</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal-950 font-semibold">
              What They Say
            </h2>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <span className="text-gold-500 text-lg tracking-wider">★★★★★</span>
            <span className="text-charcoal-500 text-sm">4.6 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`reveal ${t.delay} group relative bg-white p-8 border border-charcoal-100 hover:border-gold-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-400`}
            >
              {/* Large quote */}
              <span className="absolute top-4 right-6 font-serif text-7xl text-charcoal-100 group-hover:text-gold-100 leading-none select-none transition-colors duration-300">
                &ldquo;
              </span>
              <div className="text-gold-400 text-sm tracking-widest mb-5">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6 relative z-10 font-light italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3 border-t border-charcoal-100 pt-5">
                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-semibold text-xs font-serif">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-charcoal-900 font-medium text-sm">{t.name}</p>
                  <p className="text-charcoal-400 text-xs">Verified Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
