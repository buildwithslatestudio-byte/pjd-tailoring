"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const anim = (delay: string) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${delay} ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=85')" }}
      />
      {/* Multi-layer overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-charcoal-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/30" />

      {/* Vertical gold accent line */}
      <div className={`absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 ${anim("delay-[1100ms]")}`}>
        <span className="w-px h-20 bg-gradient-to-b from-transparent to-gold-400/70" />
        <span className="text-gold-400/60 text-[9px] tracking-[0.4em] uppercase rotate-90 whitespace-nowrap my-4">Est. 2010</span>
        <span className="w-px h-20 bg-gradient-to-t from-transparent to-gold-400/70" />
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-8 ${anim("delay-[0ms]")}`}>
            <span className="w-8 h-px bg-gold-400" />
            <span className="section-label text-gold-400">New York City · Midtown Manhattan</span>
          </div>

          {/* Headline */}
          <h1 className={`font-serif text-6xl sm:text-7xl md:text-8xl text-white font-semibold leading-[0.95] mb-8 ${anim("delay-[150ms]")}`}>
            Tailored<br />
            to{" "}
            <em className="not-italic text-gradient">Perfection</em>
          </h1>

          {/* Body */}
          <p className={`text-charcoal-300 text-lg leading-relaxed mb-10 max-w-lg font-light ${anim("delay-[300ms]")}`}>
            Bespoke suits, expert alterations, and impeccable craftsmanship — 
            serving New York City for over 15 years.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 mb-16 ${anim("delay-[450ms]")}`}>
            <a href="tel:+19179383985" className="btn-gold">
              Call Now
            </a>
            <Link href="/contact" className="btn-outline">
              Book a Fitting
            </Link>
          </div>

          {/* Stats */}
          <div className={`flex gap-10 border-t border-white/10 pt-8 ${anim("delay-[600ms]")}`}>
            {[
              { value: "15+", label: "Years" },
              { value: "4.6★", label: "Google" },
              { value: "1000+", label: "Clients" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-semibold text-gold-400">{s.value}</p>
                <p className="text-charcoal-400 text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={`absolute bottom-8 right-8 flex flex-col items-center gap-2 ${anim("delay-[900ms]")}`}>
        <span className="text-charcoal-500 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-gold-400/50 to-transparent" />
      </div>
    </section>
  );
}
