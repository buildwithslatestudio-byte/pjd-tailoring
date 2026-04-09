import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our gallery of custom suits, alterations, and tailored garments from PJD Custom Tailoring in New York City.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Custom suit", category: "Suits" },
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=800&q=80", alt: "Suit fitting", category: "Suits" },
  { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80", alt: "Tailored shirts", category: "Shirts" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Dress alterations", category: "Dresses" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Wedding outfit", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80", alt: "Fashion tailoring", category: "Fashion" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", alt: "Bespoke suit portrait", category: "Suits" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", alt: "Clothing store", category: "Studio" },
  { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80", alt: "Fashion detail", category: "Fashion" },
  { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", alt: "Elegant dress", category: "Dresses" },
  { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80", alt: "Street fashion", category: "Fashion" },
  { src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80", alt: "Tailoring detail", category: "Studio" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Our Portfolio"
        title="Gallery"
        image="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden group break-inside-avoid"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <span className="text-white text-xs font-medium uppercase tracking-widest block">{img.alt}</span>
                    <span className="text-gold-400 text-[10px] uppercase tracking-widest">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-charcoal-950 relative overflow-hidden text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,148,26,0.07),transparent)]" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-serif text-5xl sm:text-6xl text-white font-semibold mb-4">
            Like What You See?
          </h2>
          <p className="text-charcoal-400 mb-10 font-light text-lg">
            Book a consultation and let us create something tailored just for you.
          </p>
          <a href="tel:+19179383985" className="btn-gold text-base px-10 py-4">
            Call +1 (917) 938-3985
          </a>
        </div>
      </section>
    </>
  );
}
