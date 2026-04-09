"use client";
import Link from "next/link";
import { useReveal } from "@/components/useReveal";

export default function ContactCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative py-36 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/92 via-charcoal-950/80 to-charcoal-950/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,148,26,0.08),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="reveal section-label text-gold-400 block mb-5">Ready to Get Started?</span>
        <h2 className="reveal delay-100 font-serif text-5xl sm:text-6xl md:text-7xl text-white font-semibold leading-tight mb-6">
          Book Your<br />Fitting Today
        </h2>
        <p className="reveal delay-200 text-charcoal-400 text-lg mb-12 font-light max-w-lg mx-auto leading-relaxed">
          Visit us at 260 W 36th St, Suite 802, New York — or give us a call to schedule your appointment.
        </p>
        <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+19179383985" className="btn-gold text-base px-10 py-4">
            +1 (917) 938-3985
          </a>
          <Link href="/contact" className="btn-outline text-base px-10 py-4">
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
