import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore PJD Custom Tailoring services: custom suits, alterations, wedding outfits, dress tailoring, and more in New York City.",
};

const services = [
  {
    num: "01",
    title: "Custom Suits",
    desc: "Every suit is crafted from scratch to your exact measurements. Choose from a wide selection of premium fabrics, linings, and styles — from classic business suits to modern slim-fit designs.",
    features: ["Full canvas construction", "Premium fabric selection", "Multiple fittings included", "Monogramming available"],
  },
  {
    num: "02",
    title: "Alterations",
    desc: "Whether it's a hem, a tuck, or a full resize, our expert tailors handle all types of alterations with precision and care. We work on all garment types.",
    features: ["Hemming & tapering", "Waist & seat adjustments", "Sleeve shortening", "Zipper replacement"],
  },
  {
    num: "03",
    title: "Wedding Outfits",
    desc: "Your wedding day deserves perfection. We tailor bridal gowns, bridesmaids dresses, groom suits, and all wedding party attire to ensure everyone looks their absolute best.",
    features: ["Bridal gown alterations", "Groom & groomsmen suits", "Rush service available", "Multiple fittings"],
  },
  {
    num: "04",
    title: "Dress Tailoring",
    desc: "From cocktail dresses to evening gowns, we tailor all styles of women's dresses to achieve a flawless, flattering fit that moves with you.",
    features: ["Evening & cocktail dresses", "Formal gowns", "Casual dress alterations", "Lining & structure work"],
  },
  {
    num: "05",
    title: "Shirt & Trouser Tailoring",
    desc: "Off-the-rack shirts and trousers rarely fit perfectly. We customize them to your body, ensuring comfort and a sharp, polished look every day.",
    features: ["Collar & cuff adjustments", "Trouser hemming", "Waistband alterations", "Custom fit shirts"],
  },
  {
    num: "06",
    title: "Leather & Specialty",
    desc: "We have the expertise to work with leather jackets, coats, and other specialty garments that require a skilled hand and specialized techniques.",
    features: ["Leather jacket alterations", "Coat resizing", "Lining replacement", "Zipper & hardware repair"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Offer"
        title="Our Services"
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80"
      />

      {/* Services list */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="divide-y divide-charcoal-100">
            {services.map((s) => (
              <div
                key={s.title}
                className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 py-12 hover:bg-charcoal-50 -mx-6 px-6 transition-colors duration-300"
              >
                {/* Number */}
                <span className="font-serif text-4xl text-charcoal-200 group-hover:text-gold-300 font-semibold transition-colors duration-300 leading-none pt-1">
                  {s.num}
                </span>
                {/* Title + desc */}
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-charcoal-900 group-hover:text-gold-600 mb-4 transition-colors duration-300">
                    {s.title}
                  </h2>
                  <p className="text-charcoal-500 leading-relaxed font-light">{s.desc}</p>
                </div>
                {/* Features */}
                <ul className="space-y-2.5 self-center">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-charcoal-600">
                      <span className="w-4 h-px bg-gold-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,148,26,0.07),transparent)]" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <span className="section-label text-gold-400 block mb-4">Get Started</span>
          <h2 className="font-serif text-5xl sm:text-6xl text-white font-semibold mb-8 leading-tight">
            Ready for Your Perfect Fit?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19179383985" className="btn-gold text-base px-10 py-4">
              Call +1 (917) 938-3985
            </a>
            <Link href="/contact" className="btn-outline text-base px-10 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
