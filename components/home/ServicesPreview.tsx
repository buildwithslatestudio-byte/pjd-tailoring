"use client";
import Link from "next/link";
import { useReveal } from "@/components/useReveal";

const services = [
  { num: "01", title: "Custom Suits", desc: "Bespoke suits crafted to your exact measurements and style preferences.", delay: "delay-100" },
  { num: "02", title: "Alterations", desc: "Expert alterations for any garment — hemming, resizing, and more.", delay: "delay-200" },
  { num: "03", title: "Dress Tailoring", desc: "From casual dresses to formal gowns, tailored to fit you flawlessly.", delay: "delay-300" },
  { num: "04", title: "Wedding Outfits", desc: "Make your special day unforgettable with perfectly fitted bridal wear.", delay: "delay-400" },
];

export default function ServicesPreview() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 reveal">
          <div>
            <span className="section-label block mb-3">What We Do</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal-950 font-semibold leading-tight">
              Our Services
            </h2>
          </div>
          <Link href="/services" className="btn-outline-dark self-start lg:self-auto">
            View All Services →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-100">
          {services.map((s) => (
            <div
              key={s.title}
              className={`reveal ${s.delay} group bg-white p-10 hover:bg-charcoal-950 transition-colors duration-500 cursor-default`}
            >
              <span className="block font-serif text-5xl text-charcoal-100 group-hover:text-charcoal-800 font-semibold mb-8 transition-colors duration-500 leading-none">
                {s.num}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 group-hover:text-white mb-4 transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-charcoal-500 group-hover:text-charcoal-400 text-sm leading-relaxed transition-colors duration-500">
                {s.desc}
              </p>
              <span className="mt-8 block w-6 h-px bg-gold-400 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
