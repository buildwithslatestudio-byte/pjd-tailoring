"use client";
import { useReveal } from "@/components/useReveal";

const reasons = [
  { title: "Master Craftsmanship", desc: "Over 15 years of tailoring expertise, delivering garments of the highest quality." },
  { title: "Perfect Fit Guarantee", desc: "We don't stop until every stitch is exactly right and you feel confident." },
  { title: "Competitive Pricing", desc: "Premium quality tailoring at fair, transparent prices — no hidden fees." },
  { title: "Fast Turnaround", desc: "We respect your time. Rush services available for urgent alterations." },
  { title: "Trusted by New Yorkers", desc: "Hundreds of satisfied clients across Manhattan and the greater NYC area." },
  { title: "Personalized Service", desc: "Every client receives one-on-one attention and a tailored experience." },
];

const delays = ["delay-100","delay-200","delay-300","delay-400","delay-500","delay-600"];

export default function WhyChooseUs() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-32 bg-charcoal-950 relative overflow-hidden noise">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left sticky label */}
          <div className="reveal lg:sticky lg:top-32">
            <span className="section-label block mb-4 text-gold-400">Our Promise</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white font-semibold leading-tight mb-6">
              Why<br />Choose<br />PJD
            </h2>
            <span className="block w-10 h-px bg-gold-500" />
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`reveal ${delays[i]} group bg-charcoal-950 hover:bg-white/[0.03] p-8 transition-colors duration-300`}
              >
                <span className="font-serif text-4xl text-white/5 group-hover:text-gold-500/20 font-semibold leading-none block mb-5 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-medium mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
