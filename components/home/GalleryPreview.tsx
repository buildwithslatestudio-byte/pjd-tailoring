"use client";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/components/useReveal";

const images = [
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=800&q=80", alt: "Custom suit fitting", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80", alt: "Tailored shirts", span: "" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Dress alterations", span: "" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Wedding outfit", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80", alt: "Fashion tailoring", span: "" },
];

export default function GalleryPreview() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 reveal">
          <div>
            <span className="section-label block mb-3">Our Work</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal-950 font-semibold">
              Gallery
            </h2>
          </div>
          <Link href="/gallery" className="btn-outline-dark self-start sm:self-auto">
            View Full Gallery →
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] reveal delay-200">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden group ${img.span} ${i === 0 ? "row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-all duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-xs font-medium uppercase tracking-widest">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
