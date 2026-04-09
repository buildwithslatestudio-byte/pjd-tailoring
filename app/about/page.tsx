import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PJD Custom Tailoring & Alterations — over 15 years of expert craftsmanship in New York City.",
};

const values = [
  { num: "01", title: "Craftsmanship", desc: "Every stitch is placed with intention. We take pride in the details that most people never see — because we know they matter." },
  { num: "02", title: "Experience", desc: "With over 15 years in the industry, we've worked with thousands of clients and every type of garment imaginable." },
  { num: "03", title: "Quality", desc: "We use only premium materials and proven techniques to ensure every garment we touch leaves our studio looking its best." },
  { num: "04", title: "Customer First", desc: "Your satisfaction is our measure of success. We work closely with every client until the fit is exactly right." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Story"
        title="About Us"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />

      {/* Story */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=800&q=80"
                alt="Tailor at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal-950 text-white p-6 hidden sm:block">
              <p className="font-serif text-4xl font-semibold text-gold-400">15+</p>
              <p className="text-charcoal-400 text-xs uppercase tracking-widest mt-1">Years of Excellence</p>
            </div>
          </div>

          <div>
            <span className="section-label block mb-4">Who We Are</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal-950 font-semibold mb-8 leading-tight">
              New York&apos;s Trusted Tailoring Studio
            </h2>
            <div className="space-y-5 text-charcoal-500 leading-relaxed font-light">
              <p>
                PJD Custom Tailoring & Alterations has been serving the New York City community from our Midtown Manhattan studio for over 15 years. Founded on a passion for precision and a commitment to quality, we&apos;ve built a reputation as one of the most trusted tailoring establishments in the city.
              </p>
              <p>
                Our team of skilled tailors brings decades of combined experience to every project — whether it&apos;s a bespoke suit built from scratch, a wedding gown that needs to be perfect, or a simple hem that deserves the same care as any other garment.
              </p>
              <p>
                We believe that clothing should fit the person wearing it, not the other way around. That philosophy drives everything we do, from the first consultation to the final fitting.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-charcoal-100 pt-10">
              {[
                { value: "15+", label: "Years in Business" },
                { value: "1000+", label: "Clients Served" },
                { value: "4.6★", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-semibold text-gold-500">{s.value}</p>
                  <p className="text-charcoal-500 text-xs uppercase tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(201,148,26,0.06),transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label text-gold-400 block mb-4">What Drives Us</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white font-semibold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v) => (
              <div key={v.title} className="group bg-charcoal-950 p-10 hover:bg-white/[0.04] transition-colors duration-300">
                <span className="font-serif text-5xl text-white/5 group-hover:text-gold-500/20 font-semibold block mb-6 transition-colors duration-300">
                  {v.num}
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mb-3 group-hover:text-gold-300 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold-500 relative overflow-hidden text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl sm:text-6xl text-white font-semibold mb-4">
            Come Visit Our Studio
          </h2>
          <p className="text-white/75 mb-10 text-lg font-light">
            260 W 36th St, Suite 802, New York, NY 10018
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19179383985" className="inline-flex items-center justify-center px-10 py-4 bg-white text-gold-600 font-medium text-sm rounded-full hover:bg-gold-50 transition-colors">
              Call Us Now
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-white/50 text-white font-medium text-sm rounded-full hover:border-white transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
